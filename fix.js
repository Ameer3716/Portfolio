const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  content = content.replace(/â€”/g, '—');
  content = content.replace(/Â·/g, '·');
  content = content.replace(/â”€/g, '─');
  
  // Also remove some AI traces
  content = content.replace(/✅/g, '✔️');
  content = content.replace(/❌/g, '⚠️');
  content = content.replace(/🚀/g, '');
  content = content.replace(/⚡/g, '📍');

  // Fix known emoji corruptions from earlier Set-Content
  content = content.replace(/ðŸ§ /g, '💻');
  content = content.replace(/âš™ï¸/g, '🔌');
  content = content.replace(/ðŸŽ¨/g, '🖥️');
  content = content.replace(/ðŸ› ï¸/g, '☁️');
  content = content.replace(/ðŸ¥/g, '🩺'); 
  content = content.replace(/âš–ï¸/g, '⚖'); 
  content = content.replace(/ðŸ“ /g, '📄'); 
  content = content.replace(/ðŸ“°/g, '📱');
  content = content.replace(/ðŸ³/g, '🥘'); 
  content = content.replace(/ðŸŽ§/g, '🎧');
  content = content.replace(/ðŸ¤–/g, '🤖');
  content = content.replace(/ðŸ” /g, '🔍');
  content = content.replace(/ðŸ“Š/g, '📊');
  
  // also catch the ones in server.js
  content = content.replace(/âœ…/g, '✔️');
  content = content.replace(/âšï¸/g, '⚠️');
  content = content.replace(/ðŸš€/g, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', filePath);
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules') continue;
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      fixFile(fullPath);
    }
  }
}

walk('e:/Ameer/portfolio/client/src');
walk('e:/Ameer/portfolio/server');