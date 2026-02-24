const https = require('https');
const fs = require('fs');
const path = require('path');

// URLs delle immagini dal sito originale (basate sull'analisi del sito)
const imageUrls = [
  // Queste sono URL ipotetiche - dovremmo trovare le URL reali
  'https://www.beyond-the-step.it/images/dance-hero.jpg',
  'https://www.beyond-the-step.it/images/gallery1.jpg',
  'https://www.beyond-the-step.it/images/gallery2.jpg',
  'https://www.beyond-the-step.it/images/gallery3.jpg',
  'https://www.beyond-the-step.it/images/gallery4.jpg'
];

const imagesDir = path.join(__dirname, 'public', 'images');

// Assicuriamoci che la directory esista
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        console.error(`Failed to download ${url}: ${response.statusCode}`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Attempting to download images from beyond-the-step.it...');
  
  for (let i = 0; i < imageUrls.length; i++) {
    const url = imageUrls[i];
    const filename = `original-${i + 1}.jpg`;
    
    try {
      await downloadImage(url, filename);
    } catch (error) {
      console.error(`Error downloading ${url}:`, error.message);
    }
  }
  
  console.log('Download attempt completed.');
}

downloadAllImages().catch(console.error);
