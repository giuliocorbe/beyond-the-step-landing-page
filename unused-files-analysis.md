# Analisi File Non Utilizzati

## Immagini Utilizzate (✅)
- `/images/image-high-f03vod.webp` - Logo e favicon
- `/images/silk-viscose-velvet-tc000025.webp` - Hero background per tutte le pagine
- `/images/601347558_18058612139644301_4918366638968107986_n.jpeg` - Corso Children & Junior
- `/images/(Nessun oggetto)/WhatsApp Image 2026-02-25 at 15.19.17.jpeg` - Corso Adulti
- `/images/(Nessun oggetto)/gest.jpeg` - Corso Lezioni Private
- `/images/(Nessun oggetto)/859889eb-9ad0-4484-ab59-a83ecad00e72.jpeg` - Vision section
- `/images/(Nessun oggetto)/49cb7a2e-18c7-405d-be50-fd6fea7bce3d.JPG` - Progetti pagina
- `/images/(Nessun oggetto)/cb0c5b85-6e9d-497d-a69d-46b5d9e6679a.JPG` - Carosello progetti
- `/images/(Nessun oggetto)/16ffbd70-7b7e-4bab-b041-71969d747cce.JPG` - Carosello progetti
- `/images/(Nessun oggetto)/071c40e6-ec03-470f-91fd-5d44d286b82c.jpeg` - Gallery
- `/images/(Nessun oggetto)/0aa9242c-9fa5-4264-bce7-035ba8e4c00c.jpeg` - Gallery
- `/images/(Nessun oggetto)/17fb6852-0ad1-4c10-8469-42121a859dc3.jpeg` - Gallery
- `/images/(Nessun oggetto)/2ef23182-f4e7-4c6e-a21c-f32e8df1022d.jpeg` - Chi siamo
- `/images/(Nessun oggetto)/WhatsApp Image 2026-02-28 at 18.46.09.jpeg` - Chi siamo L'Insegnamento
- `/images/studio-location.jpg` - Dove trovarci mappa

## Video Utilizzati (✅)
- `/videos/SaveVid.Net_AQOzRc9KFkV_2jDfVUBqtEBGw0NpTgtJeQoigLMVyR55Gu21V2wzGJxOEcgFSqJmywLkqIJ0MjO_MK1taiTHKog2e8uojbrGsf8AwpI.mp4` - Carosello progetti
- `/videos/tikmate.app_7597006628088581398_hd.mp4` - Carosello progetti

## File NON Utilizzati (❌ - DA ELIMINARE)

### Immagini principali:
- `/images/course-adults.jpg` (111KB)
- `/images/course-children.jpg` (132KB) 
- `/images/course-classical.jpg` (100KB)
- `/images/course-contemporary.jpg` (122KB)
- `/images/course-private.jpg` (90KB)
- `/images/gallery-1.jpg` (74KB)
- `/images/gallery-2.jpg` (84KB)
- `/images/gallery-3.jpg` (113KB)
- `/images/gallery-4.jpg` (110KB)
- `/images/hero-dance.jpg` (60KB)
- `/images/linda-portrait.jpg` (67KB)
- `/images/projects-collab.jpg` (108KB)
- `/images/vision-dance.jpg` (89KB)

### Immagini in "(Nessun oggetto)":
- `/images/(Nessun oggetto)/b183bbc8-f8ec-4acf-886f-4112e9411c8c.jpeg` (136KB)
- `/images/(Nessun oggetto)/dff799c8-67f8-4a7e-b514-f60be3394a57.jpeg` (165KB)
- `/images/(Nessun oggetto)/fd60a2a8-e556-46f9-b1fd-7d4376b69f06.jpeg` (126KB)

### Script:
- `/scripts/download-images.js` - Script di download non più necessario
- `/download-images.js` - Script duplicato non più necessario

## Spazio totale liberabile: ~1.5MB

## Comandi per eliminare i file:
```bash
# Immagini principali non utilizzate
rm public/images/course-adults.jpg
rm public/images/course-children.jpg
rm public/images/course-classical.jpg
rm public/images/course-contemporary.jpg
rm public/images/course-private.jpg
rm public/images/gallery-1.jpg
rm public/images/gallery-2.jpg
rm public/images/gallery-3.jpg
rm public/images/gallery-4.jpg
rm public/images/hero-dance.jpg
rm public/images/linda-portrait.jpg
rm public/images/projects-collab.jpg
rm public/images/vision-dance.jpg

# Immagini in "(Nessun oggetto)" non utilizzate
rm "public/images/(Nessun oggetto)/b183bbc8-f8ec-4acf-886f-4112e9411c8c.jpeg"
rm "public/images/(Nessun oggetto)/dff799c8-67f8-4a7e-b514-f60be3394a57.jpeg"
rm "public/images/(Nessun oggetto)/fd60a2a8-e556-46f9-b1fd-7d4376b69f06.jpeg"

# Script non necessari
rm scripts/download-images.js
rm download-images.js
```
