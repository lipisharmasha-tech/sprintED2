import { ArrowRight, Database, Zap } from "lucide-react";

const features = [
  { label: "Duration", value: "12 Weeks" },
  { label: "Mode", value: "Weekend Cohort" },
  { label: "Level", value: "Mid / Lead" },
  { label: "Batch Size", value: "Max 35" },
];

const topics = [
  "Kafka Streams & Event Architecture",
  "Agentic AI Routing",
  "Distributed Systems at Scale",
  "Cloud Data Orchestration",
  "High-Throughput Pipeline Design",
  "Schema & Architecture Reviews",
];

export function ProgramsSection() {
  return (
    <section id="programs" className="bg-white py-16 sm:py-24 border-t border-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={14} className="text-[#f97316]" />
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">
              Execution-Grade Programs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4">
            Built for Leaders,<br />Not Learners
          </h2>
          <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
            Every program is architected around real production environments — no academic boilerplate, no passive video content.
            Weekend-only cohorts designed for full-time professionals.
          </p>
        </div>

        {/* Single horizontal card */}
        <div className="relative bg-[#faf5ff] border border-[#d8b4fe] rounded-2xl p-6 sm:p-10 overflow-hidden">
          <div className="absolute top-0 left-6 sm:left-8 -translate-y-1/2 bg-[#9333ea] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            New Cohort
          </div>

          <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 items-start">
            {/* Left: Title & description */}
            <div className="space-y-4 sm:space-y-5">
              <div className="w-12 h-12 rounded-xl bg-[#9333ea] flex items-center justify-center text-white shadow-md">
                <Database size={22} />
              </div>
              <h3 className="text-[#0f172a] font-extrabold text-xl sm:text-2xl leading-tight">
                Data Engineering
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                Kafka streams, Agentic AI routing, large-scale concurrent distribution networks, and high-throughput system scaling. Built for engineers who want to architect at production grade.
              </p>
              <a
                href="#enroll"
                className="inline-flex items-center gap-2 text-[#9333ea] font-bold text-sm hover:gap-3 transition-all duration-200"
              >
                View Curriculum <ArrowRight size={14} />
              </a>
            </div>

            {/* Middle: Topics */}
            <div>
              <div className="text-[#94a3b8] text-xs font-bold uppercase tracking-widest mb-4">What You'll Build</div>
              <div className="space-y-2.5">
                {topics.map((t) => (
                  <div key={t} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9333ea] shrink-0" />
                    <span className="text-[#0f172a] text-sm font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Meta */}
            <div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {features.map((f) => (
                  <div key={f.label} className="bg-white border border-[#e2e8f0] rounded-xl p-3 sm:p-4 space-y-1">
                    <div className="text-[#94a3b8] text-[10px] font-bold uppercase tracking-widest">{f.label}</div>
                    <div className="text-[#0f172a] font-extrabold text-sm">{f.value}</div>
                  </div>
                ))}
              </div>
              <a
                href="#enroll"
                className="mt-4 sm:mt-6 w-full flex items-center justify-center gap-2 bg-[#9333ea] hover:bg-[#7e22ce] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-[0_8px_20px_rgba(147,51,234,0.3)]"
              >
                Apply for This Program
              </a>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl px-6 sm:px-8 py-5">
          <div>
            <div className="text-[#0f172a] font-bold text-sm">Weekend-only cohort. Zero career disruption.</div>
            <div className="text-[#64748b] text-xs mt-0.5">
              Core production labs and build phases scheduled entirely over weekends, with async weekly updates.
            </div>
          </div>
          <a
            href="#callback"
            className="shrink-0 bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors w-full sm:w-auto text-center"
          >
            Talk to Admissions
          </a>
        </div>
      </div>
    </section>
  );
}
