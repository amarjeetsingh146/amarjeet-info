import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getReadingThoughtBySlug, getAllReadingThoughts } from '@/lib/reading';

// Pre-generate all reading thought pages at build time
export async function generateStaticParams() {
  const thoughts = getAllReadingThoughts();
  return thoughts.map((t) => ({ slug: t.slug }));
}

// Generate page metadata from MDX frontmatter
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const thought = getReadingThoughtBySlug(slug);
  if (!thought) return {};
  return { title: thought.frontmatter.title };
}

const components = {
  p: ({ children }) => <p>{children}</p>,
  blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  strong: ({ children }) => <strong>{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
};

export default async function ReadingThoughtPage({ params }) {
  const { slug } = await params;
  const thought = getReadingThoughtBySlug(slug);

  if (!thought) notFound();

  const { frontmatter, content } = thought;

  return (
    <main className="content article">
      <Link href="/reading" className="back-btn">
        ← Back to Reading
      </Link>

      <h1>{frontmatter.title}</h1>
      <div className="date">{frontmatter.date}</div>

      <MDXRemote source={content} components={components} />
    </main>
  );
}
