import Link from 'next/link';

export default function Home() {
  return (
    <main className="page-content">
      <h1>Amarjeet Singh</h1>

      <h4>Some things about me:</h4>
      <ul>
        <li>
          I'm currently pursuing a{' '}
          <a href="https://aktu.ac.in/" target="_blank" rel="noopener noreferrer">
            Master of Computer Applications (MCA)
          </a>{' '}
          from AKTU, Lucknow. Before this, I completed my{' '}
          <a href="https://msuniversity.ac.in/" target="_blank" rel="noopener noreferrer">
            Bachelor of Computer Applications (BCA)
          </a>
          , where I built a strong foundation in mathematics, computer science, and problem solving.
        </li>
        <li>
          I'm deeply interested in{' '}
          <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer">
            Artificial Intelligence
          </a>{' '}
          and systems that scale. I enjoy working at the intersection of data, software engineering, machine learning,
          and real world problem solving. I like building things from tools and algorithms to full products that are practical,
          efficient, and thoughtfully designed.
        </li>
        <li>
          I see software as a creative medium. To me, good engineering is a form of art —
          working within constraints, optimizing trade offs, and turning abstract ideas into systems that actually work.
          Startups [
          <a href="https://www.starcloud.com/" target="_blank" rel="noopener noreferrer">Starcloud</a>,{' '}
          <a href="https://neuralink.com/" target="_blank" rel="noopener noreferrer">Neuralink</a>] research projects [
          <a href="https://arxiv.org/pdf/2504.01992" target="_blank" rel="noopener noreferrer">Economic &amp; Social Policy Impact of AI</a>,{' '}
          <a href="https://arxiv.org/abs/1506.02142" target="_blank" rel="noopener noreferrer">Bayesian Approximation</a>],
          and Innovations [
          <a href="https://youtu.be/ZrJeYFxpUyQ?si=yv29LuG0jmbjo-7x" target="_blank" rel="noopener noreferrer">Video</a>]
          excite me because they allow learning, creation, and impact at the same time.
        </li>
      </ul>

      <h4>Some things I'm interested in:</h4>
      <ul>
        <li>
          Artificial Intelligence &amp; Machine Learning especially applied ML, data analysis, system optimization, and
          intelligent automation.
        </li>
        <li>
          Quantitative Thinking &amp; Decision Systems — Probability, trading systems, optimization, and modeling uncertainty in complex environments.
        </li>
        <li>
          Psychology &amp; Human Behavior — Understanding how people think, decide, and behave especially patterns,
          incentives, and cognitive biases.
        </li>
        <li>
          Things I love to do <span className="text-[#444]">[Chess, Badminton, Reading Books]</span>.
        </li>
      </ul>

      <p>
        Feel free to explore my <Link href="/reading">reading</Link>, <Link href="/writing">writing</Link>, and{' '}
        <Link href="/deep-dive">deep dives</Link>.
      </p>
    </main>
  );
}
