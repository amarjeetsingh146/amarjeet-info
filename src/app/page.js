import Link from 'next/link';

export const metadata = {
  title: 'Amarjeet Singh | Home',
};

export default function Home() {
  return (
    <main className="mt-[50px] md:ml-[330px] max-w-[720px] pt-[80px] md:pt-[40px] px-[24px] font-lora tracking-[1px]">
      <h1 style={{ fontStyle: 'normal', fontWeight: 700, fontSize: '48px', lineHeight: '72px' }} className="text-[#1a202c] font-lora mb-[30px]">Amarjeet Singh</h1>

      <h4 className="text-[18px] mt-[32px] mb-[12px] font-bold">Some things about me:</h4>
      <ul className="pl-[20px] list-disc">
        <li className="mb-[10px] text-[16px] leading-[24px] font-normal text-[#1a202c]">
          I’m currently pursuing a{' '}
          <a href="https://aktu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#3b5bcc] no-underline hover:underline">
            Master of Computer Applications (MCA)
          </a>{' '}
          from AKTU, Lucknow. Before this, I completed my{' '}
          <a href="https://msuniversity.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#3b5bcc] no-underline hover:underline">
            Bachelor of Computer Applications (BCA)
          </a>
          , where I built a strong foundation in mathematics, computer science, and problem solving.
        </li>
        <li className="mb-[10px] text-[16px] leading-[24px] font-normal text-[#1a202c]">
          I’m deeply interested in{' '}
          <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer" className="text-[#3b5bcc] no-underline hover:underline">
            Artificial Intelligence
          </a>{' '}
          and systems that scale. I enjoy working at the intersection of data, software engineering, machine learning,
          and real world problem solving. I like building things from tools and algorithms to full products that are practical,
          efficient, and thoughtfully designed.
        </li>
        <li className="mb-[10px] text-[16px] leading-[24px] font-normal text-[#1a202c]">
          I see software as a creative medium. To me, <span className="text-[#444]">good engineering is a form of art </span>
          working within constraints, optimizing trade offs, and turning abstract ideas into systems that actually work.
          Startups [
          <a href="https://www.starcloud.com/" target="_blank" rel="noopener noreferrer" className="text-[#3b5bcc] no-underline hover:underline">Starcloud</a>,{' '}
          <a href="https://neuralink.com/" target="_blank" rel="noopener noreferrer" className="text-[#3b5bcc] no-underline hover:underline">Neuralink</a>] research projects [
          <a href="https://arxiv.org/pdf/2504.01992" target="_blank" rel="noopener noreferrer" className="text-[#3b5bcc] no-underline hover:underline">Economic & Social Policy Impact of AI</a>,{' '}
          <a href="https://arxiv.org/abs/1506.02142" target="_blank" rel="noopener noreferrer" className="text-[#3b5bcc] no-underline hover:underline">Bayesian Approximation</a>],
          and Innovations [
          <a href="https://youtu.be/ZrJeYFxpUyQ?si=yv29LuG0jmbjo-7x" target="_blank" rel="noopener noreferrer" className="text-[#3b5bcc] no-underline hover:underline">Video</a>]
          excite me because they allow learning, creation, and impact at the same time.
        </li>
      </ul>

      <h4 className="text-[18px] mt-[32px] mb-[12px] font-bold">Some things I'm interested in:</h4>
      <ul className="pl-[20px] list-disc">
        <li className="mb-[10px] text-[16px] leading-[24px] font-normal text-[#1a202c]">
          Artificial Intelligence & Machine Learning especially applied ML, data analysis, system optimization, and
          intelligent automation.
        </li>
        <li className="mb-[10px] text-[16px] leading-[24px] font-normal text-[#1a202c]">
          Quantitative Thinking & Decision Systems Probability, trading systems, optimization, and modeling uncertainty in complex environments.
        </li>
        <li className="mb-[10px] text-[16px] leading-[24px] font-normal text-[#1a202c]">
          Psychology & Human Behavior Understanding how people think, decide, and behave especially patterns,
          incentives, and cognitive biases.
        </li>
        <li className="mb-[10px] text-[16px] leading-[24px] font-normal text-[#1a202c]">
          Things I love to do <span className="text-[#444]">[Chess, Badminton, Reading Books]</span>.
        </li>
      </ul>


      <p className="mt-[20px] mb-[60px]">
        Feel free to explore my <Link href="/reading" className="text-[#3b5bcc] no-underline hover:underline">reading</Link>, <Link href="/writing" className="text-[#3b5bcc] no-underline hover:underline">writing</Link>, and{' '}
        <Link href="/deep-dive" className="text-[#3b5bcc] no-underline hover:underline">deep dives</Link>.
      </p>




    </main>
  );
}
