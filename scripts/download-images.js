import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';

const images = [
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/image-high-f03vod.png?enable-io=true&enable=upscale&height=70',
    path: '/vercel/share/v0-project/public/images/logo.png'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/02356cdeaca4201b90d14bae316c4534-standard.jpg',
    path: '/vercel/share/v0-project/public/images/home-main.jpg'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/02356cdeaca4201b90d14bae316c4534-standard-5kn9sv.jpg',
    path: '/vercel/share/v0-project/public/images/home-second.jpg'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/0e131f5ae2e8a3d3c087cf8188c9fc81-standard.jpg',
    path: '/vercel/share/v0-project/public/images/linda-portrait.jpg'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/whatsapp-image-2026-02-17-at-18-25-51-1-standard.jpg',
    path: '/vercel/share/v0-project/public/images/linda-action.jpg'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/linda-figa-logo-sito-standard-iz5d6o.png',
    path: '/vercel/share/v0-project/public/images/corsi-linda.png'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/tenda-logo-high.jpg?enable-io=true&enable=upscale&crop=1.2055%3A1%2Coffset-y51&width=800',
    path: '/vercel/share/v0-project/public/images/corsi-tenda.jpg'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/fit-dance-figa-logo-high.png?enable-io=true&enable=upscale&crop=1.208%3A1&width=800',
    path: '/vercel/share/v0-project/public/images/corsi-fitdance.png'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/linda-figa-logo-sito-high.png?enable-io=true&enable=upscale&crop=1.208%3A1%2Coffset-y37&width=800',
    path: '/vercel/share/v0-project/public/images/corsi-linda-high.png'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/download-1-standard.png',
    path: '/vercel/share/v0-project/public/images/corsi-download.png'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/b6fd3d98f01a9ab654d8d27e01960d7a-high.jpg?enable-io=true&enable=upscale&crop=1.3889%3A1%2Coffset-y49&width=800',
    path: '/vercel/share/v0-project/public/images/corsi-group.jpg'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/cuore-infuocato-high.jpg?enable-io=true&enable=upscale&crop=0.9087%3A1%2Coffset-y23&width=800',
    path: '/vercel/share/v0-project/public/images/corsi-cuore.jpg'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/progetti-e-collab-standard.jpg',
    path: '/vercel/share/v0-project/public/images/progetti-collab.jpg'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/foto-sala-per-sito-high.jpg?enable-io=true&enable=upscale&crop=1.6667%3A1&width=800',
    path: '/vercel/share/v0-project/public/images/sala-studio.jpg'
  },
  {
    url: 'https://primary.jwwb.nl/public/q/a/f/temp-crwwaaekzjdccvyxrtqj/gemini_generated_image_35c0zn35c0zn35c0-high.png?enable-io=true&enable=upscale&crop=1.6667%3A1&width=800',
    path: '/vercel/share/v0-project/public/images/mappa-studio.png'
  },
];

async function downloadImage(url, path) {
  try {
    await mkdir(dirname(path), { recursive: true });
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`FAILED ${path}: ${response.status} ${response.statusText}`);
      return;
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(path, buffer);
    console.log(`OK ${path} (${buffer.length} bytes)`);
  } catch (err) {
    console.log(`ERROR ${path}: ${err.message}`);
  }
}

async function main() {
  console.log(`Downloading ${images.length} images...`);
  const results = await Promise.all(images.map(img => downloadImage(img.url, img.path)));
  console.log('Done!');
}

main();
