import fs from 'fs';

let content = fs.readFileSync('e:/amarjeet.info/next-site/src/data/books.js', 'utf8');

// I'll manually define the ratings for each book by id to ensure a good spread
const newRatings = {
  1: "8/10",
  2: "6/10",
  3: "8/10",
  4: "8/10",
  5: "6/10",
  6: "8/10",
  7: "9/10",
  8: "8/10",
  9: "9/10",
  10: "8/10",
  11: "9/10",
  12: "8/10",
  13: "9/10",
  14: "8/10",
  15: "7/10",
  16: "10/10" // Kept as 10/10 as requested
};

const updatedContent = content.replace(/id:\s*(\d+),[\s\S]*?rating:\s*"([^"]+)",/g, (match, idStr, oldRating) => {
  const id = parseInt(idStr, 10);
  const newRating = newRatings[id];
  return match.replace(`rating: "${oldRating}"`, `rating: "${newRating}"`);
});

fs.writeFileSync('e:/amarjeet.info/next-site/src/data/books.js', updatedContent);
