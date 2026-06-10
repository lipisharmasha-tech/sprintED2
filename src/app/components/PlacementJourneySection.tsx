const phases = [
  {
    month: "Month 1 – 2",
    title: "Baseline Assessment & Gaps Mapping",
    description:
      "We dissect your architectural, scaling, and systems knowledge to build a completely unique development trajectory.",
    side: "left",
    color: "bg-[#2563eb]",
    num: 1,
  },
  {
    month: "Month 3 – 4",
    title: "Production Builds & Capstone Sprints",
    description:
      "You design and run real large-scale distributed setups, testing bottlenecks, failover protocols, and database query parameters under production workloads.",
    side: "right",
    color: "bg-[#f97316]",
    num: 2,
  },
  {
    month: "Month 5",
    title: "Exclusive Hiring Hackathons Activation",
    description:
      "Enter private engineering challenges monitored by vetted partner organizations. Your practical solutions serve as your screening validation.",
    side: "left",
    color: "bg-[#2563eb]",
    num: 3,
  },
  {
    month: "Month 6+",
    title: "Parallel Track Routing & Offer Closure",
    description:
      "Simultaneous corporate referrals, executive pitches, and negotiation strategy syncs ensure you land optimal engineering compensation structures.",
    side: "right",
    color: "bg-[#f97316]",
    num: 4,
  },
];

export function PlacementJourneySection() {
  return (
    <section className="bg-[#f8fafc] py-16 sm:py-24 border-t border-[#e2e8f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-[#1e3a8a] text-xs font-bold uppercase tracking-widest mb-4">The Journey</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4">
            Why Our Placement System<br className="hidden sm:block" /> Consistently Works
          </h2>
          <p className="text-[#64748b] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            A systematic, multi-phase trajectory that transforms raw architectural and technical competence into clear placement authority.
          </p>
        </div>

        {/* Mobile: single-column vertical timeline */}
        <div className="block sm:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#e2e8f0]" />
          <div className="space-y-8">
            {phases.map((phase) => (
              <div key={phase.num} className="relative flex gap-5">
                {/* Dot */}
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md ${phase.color} z-10`}>
                  {phase.num}
                </div>
                {/* Content */}
                <div className="pt-1 pb-2 space-y-1.5">
                  <div className="text-[#f97316] text-[10px] font-bold uppercase tracking-widest">{phase.month}</div>
                  <h3 className="text-[#0f172a] font-extrabold text-base leading-snug">{phase.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: alternating two-column timeline */}
        <div className="hidden sm:block relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#e2e8f0]" />
          <div className="space-y-12">
            {phases.map((phase) => {
              const isLeft = phase.side === "left";
              return (
                <div key={phase.num} className="relative grid grid-cols-2">
                  {/* Left cell */}
                  <div className="pr-14 flex justify-end">
                    {isLeft && (
                      <div className="text-right max-w-xs space-y-1.5">
                        <div className="text-[#f97316] text-xs font-bold uppercase tracking-widest">{phase.month}</div>
                        <h3 className="text-[#0f172a] font-extrabold text-lg leading-tight">{phase.title}</h3>
                        <p className="text-[#64748b] text-sm leading-relaxed">{phase.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 top-1 -translate-x-1/2 z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ${phase.color}`}>
                      {phase.num}
                    </div>
                  </div>

                  {/* Right cell */}
                  <div className="pl-14 flex justify-start">
                    {!isLeft && (
                      <div className="max-w-xs space-y-1.5">
                        <div className="text-[#f97316] text-xs font-bold uppercase tracking-widest">{phase.month}</div>
                        <h3 className="text-[#0f172a] font-extrabold text-lg leading-tight">{phase.title}</h3>
                        <p className="text-[#64748b] text-sm leading-relaxed">{phase.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
