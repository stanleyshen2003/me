import { imageSizeFromFile } from 'image-size/fromFile'
const dimensions = await imageSizeFromFile('/mnt/c/Users/stanl/桌面/me/public/album/dragon/1706450155848.jpg')
console.log(dimensions.width, dimensions.height)