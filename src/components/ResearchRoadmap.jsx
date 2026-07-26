'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';

// ─────────────────────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────────────────────
function MenuIcon({ open }) {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Roadmap Sidebar
// ─────────────────────────────────────────────────────────────────────────────
function RoadmapSidebar({ steps, activeId, onSelect }) {
  return (
    <nav aria-label="AI Agents Roadmap navigation">
      <ul role="list" className="space-y-0.5">
        {steps.map((step) => {
          const isActive = step.id === activeId;
          return (
            <li key={step.id} className="relative">
              <button
                onClick={() => onSelect(step.id)}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Step ${step.stepNumber}: ${step.title}`}
                className={`
                  group w-full flex items-start gap-3 py-1.5 text-left
                  focus:outline-none
                  ${isActive ? 'text-slate-900' : 'text-slate-600'}
                `}
              >
                <span className="flex flex-col min-w-0">
                  <span
                    className={`text-[12px] font-semibold uppercase tracking-wider leading-none mb-0.5 ${
                      isActive ? 'text-slate-900' : 'text-slate-400'
                    }`}
                  >
                    Step {step.stepNumber}
                  </span>
                  <span
                    className={`text-[15px] leading-snug ${
                      isActive ? 'text-slate-900 font-semibold' : 'text-slate-600'
                    } group-hover:text-slate-900 transition-colors`}
                  >
                    {step.title}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Mobile Step Selector
// ─────────────────────────────────────────────────────────────────────────────
function MobileStepSelector({ steps, activeId, onSelect, isOpen, onToggle }) {
  const activeStep = steps.find(s => s.id === activeId);
  return (
    <div className="lg:hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none"
        aria-expanded={isOpen}
        aria-controls="mobile-roadmap-menu"
        aria-label="Toggle roadmap navigation"
      >
        <span className="flex items-center gap-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Step {activeStep?.stepNumber}
          </span>
          <span className="text-[13px] font-semibold text-slate-800">{activeStep?.title}</span>
        </span>
        <MenuIcon open={isOpen} />
      </button>

      {isOpen && (
        <div
          id="mobile-roadmap-menu"
          className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden"
          role="dialog"
          aria-label="Roadmap steps menu"
        >
          <div className="max-h-80 overflow-y-auto p-2">
            <RoadmapSidebar
              steps={steps}
              activeId={activeId}
              onSelect={(id) => { onSelect(id); onToggle(); }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Roadmap Page
// ─────────────────────────────────────────────────────────────────────────────
export default function ResearchRoadmap({ steps, activeStepId, stepContent }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contentRef = useRef(null);

  const activeId = activeStepId || steps[0].id;
  const activeStep = steps.find(s => s.id === activeId) || steps[0];
  const idx = steps.findIndex(s => s.id === activeId);
  const prev = steps[idx - 1];
  const next = steps[idx + 1];

  function handleSelect(id) {
    if (id === activeId) return;
    setMobileMenuOpen(false);
    startTransition(() => {
      router.push(`?step=${id}`, { scroll: false });
    });
    // Scroll content area back to top
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Close mobile menu on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-56px)]">
      <div className="flex flex-1 overflow-hidden">

        {/* ── Desktop Sidebar ── */}
        <aside
          className="hidden lg:flex flex-col w-60 xl:w-64 shrink-0 border-r border-slate-100 bg-white"
          aria-label="Roadmap steps"
        >
          <div className="flex flex-col h-[calc(100vh-56px)] overflow-y-auto no-scrollbar relative">
            <div className="sticky top-0 bg-white/95 backdrop-blur z-10 pt-5 pb-3 px-6">
              <p className="text-[12px] font-bold uppercase tracking-widest text-slate-400 mt-8">
                Research
              </p>
            </div>
            <div className="px-3 pb-4">
              <RoadmapSidebar
                steps={steps}
                activeId={activeId}
                onSelect={handleSelect}
              />
            </div>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main
          ref={contentRef}
          id="step-content"
          className="flex-1 overflow-y-auto no-scrollbar flex flex-col"
          aria-live="polite"
          aria-label="Step detail"
        >
          {/* Mobile step selector */}
          <div className="lg:hidden sticky top-0 z-20 bg-white/95 backdrop-blur px-5 pt-5 pb-2 border-b border-slate-100">
            <MobileStepSelector
              steps={steps}
              activeId={activeId}
              onSelect={handleSelect}
              isOpen={mobileMenuOpen}
              onToggle={() => setMobileMenuOpen(v => !v)}
            />
          </div>

          {/* Step content — rendered by server component, fades when transitioning */}
          <div
            className={`mt-8 px-6 md:px-10 pt-8 pb-16 transition-opacity duration-150 ${
              isPending ? 'opacity-40' : 'opacity-100'
            }`}
          >
            <article className="max-w-3xl">
              {/* MDX content from server */}
              {stepContent}
            </article>
          </div>

          {/* Step navigation footer */}
          <div className="mt-auto shrink-0 border-t border-slate-100 px-6 md:px-10 py-8 flex justify-between items-center">
            <button
              onClick={() => prev && handleSelect(prev.id)}
              disabled={!prev}
              className="flex items-center gap-2 text-[13px] font-medium text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none rounded px-2 py-1"
              aria-label={prev ? `Previous: ${prev.title}` : 'No previous step'}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {prev ? prev.title : 'Start'}
            </button>

            <span className="text-[12px] text-slate-400 font-medium">
              {idx + 1} / {steps.length}
            </span>

            <button
              onClick={() => next && handleSelect(next.id)}
              disabled={!next}
              className="flex items-center gap-2 text-[13px] font-medium text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none rounded px-2 py-1"
              aria-label={next ? `Next: ${next.title}` : 'No next step'}
            >
              {next ? next.title : 'Done'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
