// scripts/convert-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "public/images"; // gde su originalne slike/video
const outputDir = "public/optimized"; // gde će ići WebP i AVIF verzije

// Ekstenzije koje preskačemo (video fajlovi)
const skipExtensions = [".mp4", ".mov", ".MOV"];

async function processImage(filePath, relativePath) {
  const ext = path.extname(filePath).toLowerCase();

  // Ako je video fajl -> preskoči
  if (skipExtensions.includes(ext)) {
    console.log(`⏭ Preskačem video: ${relativePath}`);
    return;
  }

  const outputPathWebp = path.join(
    outputDir,
    relativePath.replace(/\.[^/.]+$/, ".webp")
  );
  const outputPathAvif = path.join(
    outputDir,
    relativePath.replace(/\.[^/.]+$/, ".avif")
  );

  // Kreiraj folder ako ne postoji
  fs.mkdirSync(path.dirname(outputPathWebp), { recursive: true });

  try {
    // WebP
    await sharp(filePath)
      .toFormat("webp", { quality: 75 })
      .toFile(outputPathWebp);

    // AVIF (opciono)
    await sharp(filePath)
      .toFormat("avif", { quality: 50 })
      .toFile(outputPathAvif);

    console.log(`✔ Konvertovano: ${relativePath}`);
  } catch (err) {
    console.error(`⚠ Greška kod ${relativePath}:`, err.message);
  }
}

function walkDir(dir, baseDir = "") {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const relPath = path.join(baseDir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, relPath);
    } else {
      processImage(fullPath, relPath);
    }
  }
}

// Pokreni rekurzivno
walkDir(inputDir);
