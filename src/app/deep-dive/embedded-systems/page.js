import ResearchRoadmap from '@/components/ResearchRoadmap';
import StepContent from '@/components/StepContent';
import embeddedSystemsSteps from '@/data/embeddedSystemsSteps.json';

export const metadata = {
  title: 'Embedded Systems Research',
  description:
    'A structured 20-step learning roadmap for Embedded Systems — covering electronics fundamentals, STM32 architecture, GPIO, communication protocols, sensor integration, real-time systems, and drone flight controllers.',
};

export default async function EmbeddedSystemsPage({ searchParams }) {
  const params = await searchParams;
  const stepId = params?.step || 'intro-embedded';

  return (
    <div className="mt-[56px] md:ml-[440px]">
      <ResearchRoadmap
        steps={embeddedSystemsSteps}
        activeStepId={stepId}
        stepContent={<StepContent folder="embedded-systems-steps" stepId={stepId} />}
      />
    </div>
  );
}
