import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const READING_DIR = path.join(process.cwd(), 'src', 'content', 'reading');

/**
 * Returns all reading thought slugs, titles, and dates.
 */
export function getAllReadingThoughts() {
  const files = fs.readdirSync(READING_DIR).filter((f) => f.endsWith('.mdx'));

  return files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const fullPath = path.join(READING_DIR, filename);
    const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
    };
  });
}

/**
 * Returns the raw MDX source and frontmatter for a given slug.
 */
export function getReadingThoughtBySlug(slug) {
  const fullPath = path.join(READING_DIR, `${slug}.mdx`);
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
