import Link from 'next/link';
import { getAllThoughts } from '@/lib/thoughts';

export const metadata = {
  title: 'Writing',
};

// Medium articles are static external links — kept separately
const mediumArticles = [
  {
    href: 'https://medium.com/@amarjeetsingh23833/why-is-everyone-talking-about-synthetic-data-875d47737f3f',
    title: 'Why is everyone talking about synthetic data?',
  },
  {
    href: 'https://medium.com/@amarjeetsingh23833/tensors-made-simple-from-math-to-machine-learning-9a83eeb2946d',
    title: 'Tensors Made Simple: From Math to Machine Learning',
  },
];

export default function Writing() {
  const thoughts = getAllThoughts();

  return (
    <main className="page-content">
      <ul className="writing-list">
        {/* Auto-generated from MDX files in src/content/thoughts/ */}
        {thoughts.map(({ slug, title, date }) => (
          <li key={slug} className="writing-item">
            <Link href={`/writing/thoughts/${slug}`}>
              {title}
            </Link>
            <div className="meta">{date}</div>
          </li>
        ))}

        {/* External Medium articles */}
        {mediumArticles.map(({ href, title }) => (
          <li key={href} className="writing-item">
            <a href={href} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
            <div className="meta">Medium.com</div>
          </li>
        ))}
      </ul>
    </main>
  );
}

