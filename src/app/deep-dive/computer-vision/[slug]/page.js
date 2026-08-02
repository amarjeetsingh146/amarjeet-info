import Link from 'next/link';
import StepContent from '@/components/StepContent';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} | Computer Vision`,
  };
}

export default async function ComputerVisionSlugPage({ params }) {
  const { slug } = await params;

  return (
    <div className="article">
      <Link 
        href="/deep-dive/computer-vision" 
        className="inline-flex items-center gap-1 text-[13px] text-[#888] hover:text-[#4b86b4] mb-8 font-bold tracking-[1px] uppercase transition-colors"
      >
        <span className="text-[14px]">←</span> Back
      </Link>
      
      <div className="mb-12">
        <StepContent folder="computer-vision-steps" stepId={slug} />
      </div>
    </div>
  );
}
