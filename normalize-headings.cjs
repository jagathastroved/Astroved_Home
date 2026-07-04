const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Jagathratchagan/React/AstroVed_home/src/components/sections';
const files = fs.readdirSync(dir);

const replaceSizes = (content, tagPattern, newSize) => {
    // Regex to match the tag and class attribute, and capture the text sizing classes
    // e.g. <ScrollFloat containerClassName="font-ui text-4xl md:text-5xl text-black"
    const regex = new RegExp(`(<(?:${tagPattern})[^>]*(?:containerClassName|className)="[^"]*)(text-[a-z0-9-]+(?:\\s+(?:sm|md|lg|xl|2xl):text-[a-z0-9-]+)*)`, 'g');
    return content.replace(regex, (match, p1, p2) => {
        return p1 + newSize;
    });
};

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Change all headings to the same font family (font-sans)
    content = content.replace(/\bfont-ui\b/g, 'font-sans');
    
    // 2. Standardize section headings size (h1, h2, ScrollFloat)
    if (file !== 'HeroSection.tsx') {
        content = replaceSizes(content, 'ScrollFloat|h2', 'text-4xl md:text-5xl');
    }
    
    // 3. Standardize card titles size (h3)
    content = replaceSizes(content, 'h3', 'text-2xl md:text-3xl');
    
    // 4. Standardize smaller card titles (h4)
    content = replaceSizes(content, 'h4', 'text-xl md:text-2xl');

    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log("Headings completely normalized.");
