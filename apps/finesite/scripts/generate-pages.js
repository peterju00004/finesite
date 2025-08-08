import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  'projects',
  'projects/coding',
  'projects/digital-narrative',
  'projects/audio-design', 
  'projects/other',
  'contact'
];

const indexHtml = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');

routes.forEach(route => {
  const routePath = path.join(__dirname, '../dist', route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'index.html'), indexHtml);
  console.log(`Created: ${route}/index.html`);
});