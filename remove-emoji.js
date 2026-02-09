const fs = require('fs');

// Read file
let content = fs.readFileSync('index.html', 'utf8');

// Remove emojis using Unicode property escapes
content = content.replace(/\p{Emoji_Presentation}/gu, '');
content = content.replace(/\p{Extended_Pictographic}/gu, '');

// Also remove common emoji ranges manually
const emojiRanges = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2300}-\u{23FF}]|[\u{2B50}]|[\u{2764}]|[\u{FE00}-\u{FE0F}]|[\u{1F900}-\u{1F9FF}]/gu;
content = content.replace(emojiRanges, '');

// Write output
fs.writeFileSync('index.html', content, 'utf8');

console.log('Emojis removed successfully!');
console.log('File size:', fs.statSync('index.html').size, 'bytes');
