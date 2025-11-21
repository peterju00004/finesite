const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const projectName = 'onestopmoments';
const srcPath = path.join(__dirname, '../../', projectName);
const destPath = path.join(__dirname, '../dist', projectName);

console.log(`Copying ${projectName} to dist...`);
copyRecursiveSync(srcPath, destPath);
console.log(`✅ ${projectName} copied successfully!`);

// Also copy 404.html to root dist for GitHub Pages
const src404 = path.join(srcPath, '404.html');
const dest404 = path.join(__dirname, '../dist', '404.html');
if (fs.existsSync(src404)) {
  fs.copyFileSync(src404, dest404);
  console.log(`✅ 404.html copied to dist root`);
}