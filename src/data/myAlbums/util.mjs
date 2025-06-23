import { readdir } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { imageSizeFromFile } from 'image-size/fromFile';

const albumName = 'dragon'; // Change this to your album name

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const absoluteDirPath = resolve(__dirname, '../../../public/album', albumName);

const files = await readdir(absoluteDirPath);

console.log("files", files);

const allphotos = await Promise.all(
  files.map(async (file) => {
    const filePath = resolve(absoluteDirPath, file);
    console.log("filePath", filePath);
    const dimensions = await imageSizeFromFile(filePath);
    return {
      src: `\${basedir}/album/${albumName}/${file}`,
      width: dimensions.width,
      height: dimensions.height,
    };
  })
);

console.log(allphotos);
