const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Jagathratchagan/React/AstroVed_home/src/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Reduce section vertical padding
    content = content.replace(/\bpy-32\b/g, 'py-16');
    content = content.replace(/\bpy-24\b/g, 'py-12 md:py-16');
    content = content.replace(/\bpy-20\b/g, 'py-10 md:py-12');
    
    // Reduce large margins
    content = content.replace(/\bmb-20\b/g, 'mb-12');
    content = content.replace(/\bmb-16\b/g, 'mb-8');
    content = content.replace(/\bmt-20\b/g, 'mt-12');
    content = content.replace(/\bmt-16\b/g, 'mt-8');
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

const appDir = 'c:/Users/Jagathratchagan/React/AstroVed_home/src/App.tsx';
if (fs.existsSync(appDir)) {
    let appContent = fs.readFileSync(appDir, 'utf8');
    appContent = appContent.replace(/\bgap-12\b/g, 'gap-6');
    appContent = appContent.replace(/\bgap-24\b/g, 'gap-12');
    fs.writeFileSync(appDir, appContent, 'utf8');
}

console.log('Successfully reduced spacing in all sections!');
