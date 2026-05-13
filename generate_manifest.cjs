const fs = require('fs');
const path = require('path');

const sourceDir = 'D:\\Antigravity Softwares\\MED Growth Partners\\fotolar';
const destDir = path.join(__dirname, 'public', 'lavilla-assets');
const manifestPath = path.join(destDir, 'manifest.json');

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function copyDirectorySync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirectorySync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy files
console.log('Copying files from', sourceDir, 'to', destDir);
try {
  copyDirectorySync(sourceDir, destDir);
} catch (e) {
  console.log('Source directory not found or error copying files:', e);
}

// Generate manifest
function generateManifest(dir, baseDir) {
  const result = [];
  if (!fs.existsSync(dir)) return result;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
    
    if (entry.name === 'manifest.json') continue;
    
    if (entry.isDirectory()) {
      result.push({
        type: 'directory',
        name: entry.name,
        path: relativePath,
        children: generateManifest(fullPath, baseDir)
      });
    } else {
      result.push({
        type: 'file',
        name: entry.name,
        path: relativePath
      });
    }
  }
  return result;
}

const manifest = generateManifest(destDir, destDir);
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log('Manifest generated at', manifestPath);
