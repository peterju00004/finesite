const fs = require('fs');
const path = require('path');

const routes = [
  'projects',
  'projects/coding',
  'projects/digital-narrative',
  'projects/digital-narrative/disco',
  'projects/digital-narrative/armada',
  'projects/digital-narrative/planets',
  'projects/audio-design', 
  'projects/other',
  'contact',
  'onestopmoments'
];

const distPath = path.join(__dirname, '../dist');
const indexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');

routes.forEach(route => {
  const routePath = path.join(distPath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'index.html'), indexHtml);
  console.log(`Created: ${route}/index.html`);
});

console.log(' All route pages generated successfully!');