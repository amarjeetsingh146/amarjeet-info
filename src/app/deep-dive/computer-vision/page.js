import Link from 'next/link';

export const metadata = {
  title: 'Computer Vision',
  description: 'A structured roadmap for learning Computer Vision.',
};

export default function ComputerVisionPage() {
  return (
    <div className="page-content">
      <h2 className="text-[13px] font-bold tracking-[2px] uppercase text-[#888] mb-4">Foundations</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/deep-dive/computer-vision/cv-fundamentals" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Computer Vision Fundamentals <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/computer-vision/digital-image-fundamentals" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Digital Image Fundamentals <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/computer-vision/image-processing" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Image Processing <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/computer-vision/opencv" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">OpenCV <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/computer-vision/classical-cv" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Classical Computer Vision <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/computer-vision/ml-for-cv" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Machine Learning for Computer Vision <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/computer-vision/dl-revolution" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Deep Learning Revolution <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/computer-vision/cnn-fundamentals" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">CNN Fundamentals <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/computer-vision/cnn-evolution" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">CNN Evolution <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/computer-vision/object-detection" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Object Detection <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/computer-vision/image-segmentation" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Image Segmentation <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/computer-vision/object-tracking" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Object Tracking <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/computer-vision/vision-transformers" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Vision Transformers <span className="text-[16px] font-bold">↗</span></Link>
        <Link href="/deep-dive/computer-vision/rl-for-cv" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Reinforcement Learning for Computer Vision <span className="text-[16px] font-bold">↗</span></Link>
      </div>

      <h2 className="text-[13px] font-bold tracking-[2px] uppercase text-[#888] mt-8 mb-4">Implementation</h2>
      <div className="flex flex-col gap-y-3">
        <Link href="/deep-dive/computer-vision/implement-nn-from-scratch" className="inline-flex items-center gap-1 text-[14px] text-[#4b86b4] hover:underline underline-offset-4 decoration-1">Implement Neural Network for CV from Scratch <span className="text-[16px] font-bold">↗</span></Link>
      </div>

      <h2 className="text-[13px] font-bold tracking-[2px] uppercase text-[#888] mt-8 mb-4">References</h2>
    </div>
  );
}
