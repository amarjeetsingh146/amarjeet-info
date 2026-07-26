import fs from 'fs';

const dateList = [
  "January 15, 2024",
  "March 10, 2024",
  "May 5, 2024",
  "July 20, 2024",
  "September 12, 2024",
  "November 8, 2024",
  "January 4, 2025",
  "March 1, 2025",
  "May 15, 2025",
  "July 10, 2025",
  "September 5, 2025",
  "November 22, 2025",
  "January 18, 2026",
  "March 25, 2026",
  "June 15, 2026"
];

function getRating(meta) {
  if (meta === '★★★★★') return '10/10';
  if (meta === '★★★★☆') return '8/10';
  if (meta === '★★★☆☆') return '6/10';
  return '8/10';
}

let content = fs.readFileSync('e:/amarjeet.info/next-site/src/data/books.js', 'utf8');

let i = 0;
const newContent = content.replace(/meta: "(.*?)",/g, (match, meta) => {
  let rating = getRating(meta);
  let date = (i === 15) ? "July 29, 2023" : dateList[i];
  
  let res = `meta: "${meta}",\n    readDate: "${date}",\n    rating: "${rating}",`;
  i++;
  return res;
});

fs.writeFileSync('e:/amarjeet.info/next-site/src/data/books.js', newContent);
