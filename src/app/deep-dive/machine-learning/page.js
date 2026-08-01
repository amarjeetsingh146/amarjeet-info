import Link from 'next/link';

export const metadata = {
  title: 'Machine Learning',
  description: 'A structured roadmap for learning Machine Learning.',
};

export default function MachineLearningPage() {
  return (
    <div className="mt-[56px] md:ml-[440px] max-w-[720px] pt-[80px] md:pt-[40px] px-[24px] font-lora">
      <h2 className="text-[13px] font-bold tracking-[2px] uppercase text-[#888] mb-4">Foundations</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/deep-dive/machine-learning/ml-landscape" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">ML Landscape <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/machine-learning/foundation" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Foundation <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/machine-learning/core-intuitions" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Core Intuitions <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/machine-learning/train-my-own-models" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Train my own models <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/machine-learning/reframe-the-history-of-ml" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Reframe the History of ml <span className="text-[16px] font-bold">↗</span></Link>
      </div>

      <h2 className="text-[13px] font-bold tracking-[2px] uppercase text-[#888] mt-8 mb-4">Implementation</h2>
      <div className="flex flex-col gap-y-3">
        <Link href="/deep-dive/machine-learning/code-linear-regression-from-scratch" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Code Linear Regression from Scratch <span className="text-[16px] font-bold">↗</span></Link>
      </div>

      <h2 className="text-[13px] font-bold tracking-[2px] uppercase text-[#888] mt-8 mb-4">References</h2>
      <div className="flex flex-col gap-y-3">
        <Link href="https://arxiv.org/pdf/2408.01747" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Classical Machine Learning <span className="text-[16px] font-bold">↗</span></Link>
      </div>
    </div>
  );
}
