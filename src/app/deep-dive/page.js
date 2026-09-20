import Link from 'next/link';

export const metadata = {
  title: 'Deep Dives',
};

export default function DeepDives() {
  return (
    <main className="page-content">
      <div className="flex flex-col">

        {/* LLM Engineering */}
        <div className="deep-dive-item">
          <h2>LLM Engineering</h2>
          <p>
            Exploring the discipline of large language models and understanding the engineering behind them.
          </p>
          <div className="links">
            <Link href="/deep-dive/large-language-models">research</Link>
            <Link href="https://github.com/amarjeetsingh146/llm-engineering" target="_blank" rel="noopener noreferrer">amarjeetsingh146/llm-engineering</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
