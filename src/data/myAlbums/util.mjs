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
    var width = dimensions.width;
    var height = dimensions.height;
    if (dimensions.orientation === 6 || dimensions.orientation === 8) {
        [width, height] = [height, width];
    }
    if (width > 1200) {
        height = Math.round((height * 1200) / width);
        width = 1200;
    }
    return {
      src: `\${basedir}/album/${albumName}/${file}`,
      width: width,
      height: height,
    };
  })
);

console.log(allphotos);
