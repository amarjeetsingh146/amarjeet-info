import Link from 'next/link';

export const metadata = {
  title: 'Deep Dives',
};

export default function DeepDives() {
  return (
    <main className="page-content">
      <div className="flex flex-col">

        {/* Embedded Systems — temporarily hidden until complete
        <div className="deep-dive-item">
          <h2>Embedded Systems</h2>
          <span className="text-[12px] text-[#888]">[In Progress]</span>
          <p>
            Studying STM32 microcontrollers, embedded firmware, hardware interfaces, and real-time systems for autonomous robotics and flight control.
          </p>
          <div className="links">
            <Link href="/deep-dive/embedded-systems">research</Link>
            <Link href="https://github.com/amarjeetsingh146">GitHub</Link>
          </div>
        </div>
        */}

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

        {/* Machine Learning */}
        <div className="deep-dive-item">
          <h2>Machine Learning</h2>
          <p>
            Exploring core machine learning concepts, algorithms, data processing, and statistical modeling.
          </p>
          <div className="links">
            <Link href="/deep-dive/machine-learning">research</Link>
            <Link href="https://github.com/amarjeetsingh146/machine-learning" target="_blank" rel="noopener noreferrer">amarjeetsingh146/machine-learning</Link>
          </div>
        </div>

      </div>
    </main>
  );
}

