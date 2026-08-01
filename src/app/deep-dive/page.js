import Link from 'next/link';

export const metadata = {
  title: 'Deep Dives',
};

export default function DeepDives() {
  return (
    <main className="mt-[50px] md:ml-[480px] max-w-[720px] pt-[80px] md:pt-[40px] px-[24px] font-lora">

      <div className="flex flex-col">

        {/* Computer Vision */}
        <div className="border-b border-[#f0f0f0] pb-5 mb-5 mt-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[18px] font-bold text-[#111]">Computer Vision</h2>
            <span className="text-[12px] text-[#888] ">[In Progress]</span>
          </div>

          <p className="text-[14px] text-[#555] leading-[1.4] mb-5">
            Studying how machines perceive and understand visual information from images and videos using modern computer vision and deep learning techniques.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/deep-dive/computer-vision"
              className="text-[14px] text-[#4b86b4] hover:underline decoration-1 underline-offset-4"
            >
              Research
            </Link>
            <Link
              href="https://github.com/amarjeetsingh146"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#4b86b4] hover:underline decoration-1 underline-offset-4"
            >
              GitHub
            </Link>
          </div>
        </div>

        {/* Embedded Systems */}
        <div className="border-b border-[#f0f0f0] pb-5 mb-5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[18px] font-bold text-[#111]">Embedded Systems</h2>
            <span className="text-[12px] text-[#888] ">[In Progress]</span>
          </div>

          <p className="text-[14px] text-[#555] leading-[1.4] mb-5">
            Studying STM32 microcontrollers, embedded firmware, hardware interfaces, and real-time systems for autonomous robotics and flight control.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/deep-dive/embedded-systems"
              className="text-[14px] text-[#4b86b4] hover:underline decoration-1 underline-offset-4"
            >
              Research
            </Link>
            <Link
              href="https://github.com/amarjeetsingh146"
              className="text-[14px] text-[#4b86b4] hover:underline decoration-1 underline-offset-4"
            >
              GitHub
            </Link>
          </div>
        </div>

        {/* Machine Learning */}
        <div className="border-b border-[#f0f0f0] pb-5 mb-5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[18px] font-bold text-[#111]">Machine Learning</h2>

          </div>

          <p className="text-[14px] text-[#555] leading-[1.4] mb-5">
            Exploring core machine learning concepts, algorithms, data processing, and statistical modeling.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/deep-dive/machine-learning"
              className="text-[14px] text-[#4b86b4] hover:underline decoration-1 underline-offset-4"
            >
              Research
            </Link>
            <Link
              href="https://github.com/amarjeetsingh146/machine-learning-fundamentals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#4b86b4] hover:underline decoration-1 underline-offset-4"
            >
              GitHub
            </Link>
          </div>
        </div>

      </div>

    </main>
  );
}
