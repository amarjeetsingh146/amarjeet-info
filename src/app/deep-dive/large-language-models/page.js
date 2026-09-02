import Link from 'next/link';

export const metadata = {
  title: 'LLM Engineering',
  description: 'A structured roadmap for learning Large Language Models and their engineering.',
};

export default function LLMEngineeringPage() {
  return (
    <div className="page-content">
      <h2 className="text-[13px] font-bold tracking-[2px] uppercase text-[#888] mb-4">History</h2>
      <div className="flex flex-col gap-y-3">
        <Link href="https://www.researchgate.net/publication/399205251_The_Development_of_Large_Language_Models_from_Past_to_Present" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">The Development of Large Language Models from Past to Present <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="https://arxiv.org/pdf/2402.06853" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">History, Development, and Principles of Large Language Models <span className="text-[16px] font-bold">↗</span></Link>
      </div>

      <h2 className="text-[13px] font-bold tracking-[2px] uppercase text-[#888] mt-8 mb-4">Training & Fine-Tuning</h2>
      <div className="flex flex-col gap-y-3">
        <Link href="https://arxiv.org/pdf/2307.06435" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">A Comprehensive Overview of Large Language Models <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="https://arxiv.org/pdf/2502.21321" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">LLM Post Training <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Language Understanding Paper <span className="text-[16px] font-bold">↗</span></Link>
      </div>

      <h2 className="text-[13px] font-bold tracking-[2px] uppercase text-[#888] mt-8 mb-4">Deployment & Optimization</h2>
      <div className="flex flex-col gap-y-3">
        <Link href="https://arxiv.org/pdf/2411.02530" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">A Comprehensive Study on Quantization <span className="text-[16px] font-bold">↗</span></Link>
      </div>
    </div>
  );
}
