import ResearchRoadmap from '@/components/ResearchRoadmap';
import StepContent from '@/components/StepContent';
import aiAgentsSteps from '@/data/aiAgentsSteps.json';

export const metadata = {
  title: 'AI Agents Research',
  description:
    'A structured 15-step learning roadmap for autonomous AI agents — covering foundations, LLMs, prompt engineering, planning, tool use, memory, RAG, MCP, multi-agent systems, evaluation, safety, and production workflows.',
};

export default async function AiAgentsPage({ searchParams }) {
  const params = await searchParams;
  const stepId = params?.step || 'foundations';

  return (
    <div className="mt-[56px] md:ml-[290px]">
      <ResearchRoadmap
        steps={aiAgentsSteps}
        activeStepId={stepId}
        stepContent={<StepContent folder="ai-agents-steps" stepId={stepId} />}
      />
    </div>
  );
}
