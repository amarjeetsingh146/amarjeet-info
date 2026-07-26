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
    <main className="mt-[50px] md:ml-[330px] max-w-[720px] pt-[80px] md:pt-[40px] px-[24px] font-lora tracking-[1px]">
      <ul className="list-none p-0 m-0 max-w-[720px]">
        {/* Auto-generated from MDX files in src/content/thoughts/ */}
        {thoughts.map(({ slug, title, date }) => (
          <li key={slug} className="py-[14px] px-0 border-b border-[#eaeaea] last:border-b-0">
            <Link
              href={`/writing/thoughts/${slug}`}
              className="block text-[17px] text-[#2f6feb] no-underline hover:underline mb-[8px]"
            >
              {title}
            </Link>
            <div className="mt-[4px] text-[12px] text-[#7a7a7a]">{date}</div>
          </li>
        ))}

        {/* External Medium articles */}
        {mediumArticles.map(({ href, title }) => (
          <li key={href} className="py-[14px] px-0 border-b border-[#eaeaea] last:border-b-0">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[17px] text-[#2f6feb] no-underline hover:underline mb-[8px]"
            >
              {title}
            </a>
            <div className="mt-[4px] text-[12px] text-[#7a7a7a]">Medium.com</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
