// Server Component — renders MDX content for a given step ID
import { compileMDX } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';

// Custom MDX components for styled output
const components = {
  h2: (props) => (
    <h2
      className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 mt-8 first:mt-0"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="space-y-2 list-none p-0" {...props} />
  ),
  li: (props) => (
    <li className="flex items-start gap-2" {...props} />
  ),
  a: (props) => (
    <a
      className="inline-flex items-center gap-1.5 text-[14px] text-slate-700 hover:text-slate-900 underline underline-offset-2 decoration-slate-300 hover:decoration-slate-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-[15px] text-slate-600 leading-normal mb-4" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-2 border-blue-400 pl-4 py-1 my-4 bg-blue-50/50 rounded-r-lg italic text-slate-700" {...props} />
  ),
  strong: (props) => (
    <strong className="font-semibold text-slate-900 not-italic" {...props} />
  ),
};

export default async function StepContent({ folder, stepId }) {
  const filePath = path.join(process.cwd(), 'src', 'data', folder, `${stepId}.mdx`);

  // Graceful fallback if file doesn't exist
  if (!fs.existsSync(filePath)) {
    return (
      <p className="text-[14px] text-slate-400 italic">
        Content coming soon.
      </p>
    );
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const { content } = await compileMDX({ source, components });

  return <div>{content}</div>;
}
