import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getThoughtBySlug, getAllThoughts } from '@/lib/thoughts';

// Pre-generate all thought pages at build time
export async function generateStaticParams() {
  const thoughts = getAllThoughts();
  return thoughts.map((t) => ({ slug: t.slug }));
}

// Generate page metadata from MDX frontmatter
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const thought = getThoughtBySlug(slug);
  if (!thought) return {};
  return { title: thought.frontmatter.title };
}

// MDX component overrides — maps to the existing .article CSS classes
const components = {
  p: ({ children }) => <p>{children}</p>,
  blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  strong: ({ children }) => <strong>{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
};

export default async function ThoughtPage({ params }) {
  const { slug } = await params;
  const thought = getThoughtBySlug(slug);

  if (!thought) notFound();

  const { frontmatter, content } = thought;

  return (
    <main className="content article">
      <Link href="/writing" className="back-btn">
        ← Back to Writing
      </Link>

      <h1>{frontmatter.title}</h1>
      <div className="date">{frontmatter.date}</div>

      <MDXRemote source={content} components={components} />
    </main>
  );
}
