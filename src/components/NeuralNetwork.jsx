import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const NeuralNetwork = () => {
  const canvasRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Track scroll for "growth" effect
  const scrollValue = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    scrollValue.current = latest;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const particles = [];
    const particleCount = 60;
    const connectionDistance = 150;
    const mouse = { x: null, y: null, radius: 100 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };


    class Particle {
      constructor(index) {
        this.index = index;
        this.x = Math.random() * width;
        // Distribute particles across initial height, but they will "grow" based on scroll
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
      }

      update(scrollVelocity) {
        // Move particles - speed slightly influenced by scroll velocity
        this.x += this.vx;
        this.y += this.vy + (scrollVelocity * 0.05);

        // Wrap around with buffer
        if (this.x < -50) this.x = width + 50;
        if (this.x > width + 50) this.x = -50;
        if (this.y < -50) this.y = height + 50;
        if (this.y > height + 50) this.y = -50;

        // Interaction with mouse
        if (mouse.x != null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x += dx * force * 0.1;
            this.y += dy * force * 0.1;
          }
        }
      }

      draw(activeProgress) {
        // Only draw if particle "index" is within the current growth progress
        // This simulates the network growing as we scroll
        const threshold = (this.index / particleCount);
        if (threshold > activeProgress + 0.2) return;

        const opacity = Math.min(1, (activeProgress + 0.2 - threshold) * 5);
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.3})`;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(i));
    }

    let lastScrollY = 0;
    let scrollVelocity = 0;
    let totalPageHeight = document.documentElement.scrollHeight - window.innerHeight;

    const handleResizeInternal = () => {
      handleResize();
      totalPageHeight = document.documentElement.scrollHeight - window.innerHeight;
    };

    window.addEventListener('resize', handleResizeInternal);
    window.addEventListener('mousemove', handleMouseMove);
    handleResizeInternal();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const currentScroll = scrollValue.current;
      scrollVelocity = currentScroll - lastScrollY;
      lastScrollY = currentScroll;

      // Map scroll to 0-1 progress for growth using cached totalPageHeight
      const activeProgress = totalPageHeight > 0 ? currentScroll / totalPageHeight : 0;
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(scrollVelocity);
        particles[i].draw(activeProgress);

        for (let j = i + 1; j < particles.length; j++) {
          const thresholdI = (i / particleCount);
          const thresholdJ = (j / particleCount);
          if (thresholdI > activeProgress + 0.1 || thresholdJ > activeProgress + 0.1) continue;

          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const distanceOpacity = (1 - distance / connectionDistance);
            const growthOpacity = Math.min(1, (activeProgress + 0.1 - Math.max(thresholdI, thresholdJ)) * 5);
            const opacity = distanceOpacity * growthOpacity * 0.2;
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            
            // Subtle glow on nodes if active
            if (distanceOpacity > 0.8) {
              ctx.beginPath();
              ctx.arc(particles[i].x, particles[i].y, 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
              ctx.fill();
            }
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResizeInternal);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{ opacity: 0.8 }}
    />
  );
};

export default NeuralNetwork;
