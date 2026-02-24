// Script to extract image URLs from beyond-the-step.it
const pages = [
  'https://www.beyond-the-step.it/',
  'https://www.beyond-the-step.it/chi-siamo',
  'https://www.beyond-the-step.it/corsi-e-orari',
  'https://www.beyond-the-step.it/prezzi-e-abbonamenti',
  'https://www.beyond-the-step.it/progetti-e-collaborazioni',
  'https://www.beyond-the-step.it/dove-trovarci',
];

async function extractImages() {
  for (const url of pages) {
    try {
      const res = await fetch(url);
      const html = await res.text();
      
      console.log(`\n=== ${url} ===`);
      
      // Extract all Wix image URLs (the site is Wix-based)
      const wixRegex = /https:\/\/static\.wixstatic\.com\/media\/[^\s"'<>)\]},]+/gi;
      const wixMatches = [...html.matchAll(wixRegex)];
      
      if (wixMatches.length > 0) {
        const unique = [...new Set(wixMatches.map(m => m[0].replace(/["'\\]+$/, '')))];
        console.log(`Found ${unique.length} Wix images:`);
        unique.forEach(m => console.log('  ', m));
      }
      
      // Also find any other image URLs
      const imgSrcRegex = /<img[^>]*src=["']([^"']+)["'][^>]*>/gi;
      const imgSrcMatches = [...html.matchAll(imgSrcRegex)];
      if (imgSrcMatches.length > 0) {
        console.log(`Found ${imgSrcMatches.length} img src:`);
        imgSrcMatches.forEach(m => console.log('  ', m[1]));
      }
      
      // Background images
      const bgRegex = /url\(["']?([^"')]+)["']?\)/gi;
      const bgMatches = [...html.matchAll(bgRegex)];
      if (bgMatches.length > 0) {
        const uniqueBg = [...new Set(bgMatches.map(m => m[1]))].filter(u => u.startsWith('http'));
        if (uniqueBg.length > 0) {
          console.log(`Found ${uniqueBg.length} background images:`);
          uniqueBg.forEach(m => console.log('  ', m));
        }
      }
      
      // Also look for data-bg or WIX JSON image data
      const dataImgRegex = /"uri"\s*:\s*"([^"]+)"/gi;
      const dataImgMatches = [...html.matchAll(dataImgRegex)];
      if (dataImgMatches.length > 0) {
        const uris = [...new Set(dataImgMatches.map(m => m[1]))].filter(u => u.includes('.') && !u.includes('/'));
        if (uris.length > 0) {
          console.log(`Found ${uris.length} Wix media URIs:`);
          uris.forEach(m => console.log('  https://static.wixstatic.com/media/' + m));
        }
      }

      if (wixMatches.length === 0 && imgSrcMatches.length === 0) {
        console.log('No standard images found. Printing first 5000 chars of HTML:');
        console.log(html.substring(0, 5000));
      }
    } catch (e) {
      console.log(`Error fetching ${url}:`, e.message);
    }
  }
}

extractImages();
