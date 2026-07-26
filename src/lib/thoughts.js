import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const THOUGHTS_DIR = path.join(process.cwd(), 'src', 'content', 'thoughts');

/**
 * Returns all thought slugs, titles, and dates sorted by date descending.
 */
export function getAllThoughts() {
  const files = fs.readdirSync(THOUGHTS_DIR).filter((f) => f.endsWith('.mdx'));

  const thoughts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const fullPath = path.join(THOUGHTS_DIR, filename);
    const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
    };
  });

  // Sort newest first using Date parse; fall back to string compare
  thoughts.sort((a, b) => {
    const da = new Date(a.date);
    const db = new Date(b.date);
    if (!isNaN(da) && !isNaN(db)) return db - da;
    return b.date.localeCompare(a.date);
  });

  return thoughts;
}

/**
 * Returns the raw MDX source and frontmatter for a given slug.
 */
export function getThoughtBySlug(slug) {
  const fullPath = path.join(THOUGHTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    frontmatter: {
      title: data.title || slug,
      date: data.date || '',
    },
    content,
  };
}
