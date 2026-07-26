import Link from 'next/link';

export const metadata = {
  title: 'Deep Dives',
};

export default function DeepDives() {
  return (
    <main className="mt-[50px] md:ml-[330px] max-w-[720px] pt-[80px] md:pt-[40px] px-[24px] font-lora">

      <div className="flex flex-col">

        {/* AI Agents */}
        <div className="border-b border-[#f0f0f0] pb-5 mb-5 mt-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[20px] font-bold text-[#111]">AI Agents</h2>
            <span className="text-[14px] text-[#888] ">[In Progress]</span>
          </div>

          <p className="text-[16px] text-[#555] leading-[1.4] mb-5">
            Studying autonomous AI systems that can reason, plan, use tools, and maintain persistent memory across sessions.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="#"
              className="text-[16px] text-[#4b86b4] hover:underline decoration-1 underline-offset-4"
            >
              Research
            </Link>
            <Link
              href="#"
              className="text-[16px] text-[#4b86b4] hover:underline decoration-1 underline-offset-4"
            >
              GitHub
            </Link>
          </div>
        </div>

        {/* Embedded Systems */}
        <div className="border-b border-[#f0f0f0] pb-5 mb-5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[20px] font-bold text-[#111]">Embedded Systems</h2>
            <span className="text-[14px] text-[#888] ">[In Progress]</span>
          </div>
          
          <p className="text-[16px] text-[#555] leading-[1.4] mb-5">
            Studying STM32 microcontrollers, embedded firmware, hardware interfaces, and real-time systems for autonomous robotics and flight control.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link 
              href="#" 
              className="text-[16px] text-[#4b86b4] hover:underline decoration-1 underline-offset-4"
            >
              Research
            </Link>
            <Link 
              href="#" 
              className="text-[16px] text-[#4b86b4] hover:underline decoration-1 underline-offset-4"
            >
              GitHub
            </Link>
          </div>
        </div>

      </div>

    </main>
  );
}
