const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, 'lib', 'products.ts');
const publicDir = path.join(__dirname, 'public');
const productsDir = path.join(publicDir, 'products');

const usedImages = new Set();
const content = fs.readFileSync(productsFile, 'utf8');

// Match all strings that start with /products/ and end with .jpg or .png
const imgRegex = /image:\s*['"](\/products\/[^'"]+)['"]/g;
let match;
while ((match = imgRegex.exec(content)) !== null) {
  usedImages.add(match[1]);
}

console.log(`Found ${usedImages.size} used images in lib/products.ts`);

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allFiles = getAllFiles(productsDir);
console.log(`Found ${allFiles.length} total files in public/products`);

let deletedCount = 0;
for (const file of allFiles) {
  // Get the public path format, e.g. /products/floor-cleaning/...
  const relativePath = file.substring(publicDir.length).split(path.sep).join('/');
  
  if (!usedImages.has(relativePath)) {
    console.log(`Deleting unused image: ${relativePath}`);
    fs.unlinkSync(file);
    deletedCount++;
  }
}

console.log(`Deleted ${deletedCount} unused images.`);
