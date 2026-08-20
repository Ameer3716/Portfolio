const fs = require('fs');

let p = fs.readFileSync('e:/Ameer/portfolio/client/src/data/projects.js', 'utf8');

// Replace specific AI emojis in projects.js
p = p.replace(/🏥/g, '🩺');
p = p.replace(/⚖️/g, '⚖');
p = p.replace(/📝/g, '📄');
p = p.replace(/📰/g, '📱');
p = p.replace(/🍳/g, '🥘');
p = p.replace(/🎧/g, '🎧');
p = p.replace(/🤖/g, '💻');
p = p.replace(/🔍/g, '🔎');
p = p.replace(/📊/g, '📈');

fs.writeFileSync('e:/Ameer/portfolio/client/src/data/projects.js', p, 'utf8');
console.log('Fixed projects.js');

let s = fs.readFileSync('e:/Ameer/portfolio/client/src/components/SkillsSection.jsx', 'utf8');
s = s.replace(/🧠/g, '💻');
s = s.replace(/⚙️/g, '🔌');
s = s.replace(/🎨/g, '🖥️');
s = s.replace(/🛠️/g, '☁️');
fs.writeFileSync('e:/Ameer/portfolio/client/src/components/SkillsSection.jsx', s, 'utf8');
console.log('Fixed SkillsSection.jsx');

let c = fs.readFileSync('e:/Ameer/portfolio/client/src/components/ProjectCard.jsx', 'utf8');
c = c.replace(/⚡/g, '📌');
c = c.replace(/📌 \?\? \{project.impact\}/g, '📌 {project.impact}'); // Handle potential typo
fs.writeFileSync('e:/Ameer/portfolio/client/src/components/ProjectCard.jsx', c, 'utf8');
console.log('Fixed ProjectCard.jsx');

// Fix the typo if ProjectCard got ?? 
let c2 = fs.readFileSync('e:/Ameer/portfolio/client/src/components/ProjectCard.jsx', 'utf8');
c2 = c2.replace(/\?\? \{project\.impact\}/g, '📌 {project.impact}');
fs.writeFileSync('e:/Ameer/portfolio/client/src/components/ProjectCard.jsx', c2, 'utf8');

