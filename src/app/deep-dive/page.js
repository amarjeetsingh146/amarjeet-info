import Link from 'next/link';

export const metadata = {
  title: 'Deep Dives',
};

export default function DeepDives() {
  return (
    <main className="mt-[50px] md:ml-[330px] max-w-[720px] pt-[80px] md:pt-[40px] px-[24px] font-lora tracking-[1px]">
      <div>
        <div className="mb-[30px]">
          <h3 className="text-[24px] mb-[10px] font-bold">EDA on Google Play Store Dataset</h3>
          <Link className="text-[16px] text-[#2f6feb] no-underline hover:underline" href="/deep-dive/reports/edaOnappdata">Read Deep Dive →</Link>
        </div>
      </div>
    </main>
  );
}
