const urls = [
  'https://med-growth-web.vercel.app/vite.svg',
  'https://med-growth-web.vercel.app/sitemap.xml',
];

async function check() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
      console.log(`${res.status >= 400 ? '❌' : '✅'} ${res.status} - ${url}`);
    } catch (e) {
      console.log(`❌ ERR - ${url} (${e.message})`);
    }
  }
}
check();
