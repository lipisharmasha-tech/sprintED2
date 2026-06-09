import { ArrowRight, Zap, Brain, Database, TrendingUp } from "lucide-react";

const programs = [
  {
    icon: <Brain size={20} />,
    tag: "MOST POPULAR",
    title: "Applied GenAI and Agentic AI",
    description:
      "Build production-grade LLM pipelines, autonomous multi-agent systems, and deploy fine-tuned models at enterprise scale.",
    duration: "16 Weeks",
    mode: "Weekend Cohort",
    level: "Senior / Lead",
    color: "#f97316",
    bgColor: "bg-[#fff7ed]",
    borderColor: "border-[#fed7aa]",
    tagBg: "bg-[#f97316]",
  },
  {
    icon: <TrendingUp size={20} />,
    tag: "HIGH DEMAND",
    title: "Applied Machine Learning & GenAI",
    description:
      "Deep vector operations, structural parameter analytics, cloud orchestration models, and production ML deployment patterns.",
    duration: "14 Weeks",
    mode: "Weekend Cohort",
    level: "Mid / Senior",
    color: "#2563eb",
    bgColor: "bg-[#eff6ff]",
    borderColor: "border-[#bfdbfe]",
    tagBg: "bg-[#2563eb]",
  },
  {
    icon: <Database size={20} />,
    tag: "NEW COHORT",
    title: "Data Engineering",
    description:
      "Kafka streams, Agentic AI routing, large-scale concurrent distribution networks, and high-throughput system scaling.",
    duration: "12 Weeks",
    mode: "Weekend Cohort",
    level: "Mid / Lead",
    color: "#9333ea",
    bgColor: "bg-[#faf5ff]",
    borderColor: "border-[#d8b4fe]",
    tagBg: "bg-[#9333ea]",
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="bg-white py-24 border-t border-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={14} className="text-[#f97316]" />
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">
              Execution-Grade Programs
            </span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4">
            Built for Leaders,<br />Not Learners
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed">
            Every program is architected around real production environments — no academic boilerplate, no passive video content.
            Weekend-only cohorts designed for full-time professionals.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.title}
              className={`relative rounded-2xl border p-8 flex flex-col gap-6 ${prog.bgColor} ${prog.borderColor} hover:shadow-lg transition-shadow duration-300 group`}
            >
              {/* Tag */}
              <div
                className="absolute -top-3 left-6 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest"
                style={{ backgroundColor: prog.color }}
              >
                {prog.tag}
              </div>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                style={{ backgroundColor: prog.color }}
              >
                {prog.icon}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <h3 className="text-[#0f172a] font-extrabold text-lg leading-tight">{prog.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{prog.description}</p>
              </div>

              {/* Meta */}
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-black/5">
                {[
                  { label: "Duration", value: prog.duration },
                  { label: "Mode", value: prog.mode },
                  { label: "Level", value: prog.level },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="text-[#94a3b8] text-[10px] font-semibold uppercase tracking-wide">{m.label}</div>
                    <div className="text-[#0f172a] text-xs font-bold mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#enroll"
                className="inline-flex items-center gap-2 text-sm font-bold transition-colors group-hover:gap-3 duration-200"
                style={{ color: prog.color }}
              >
                View Curriculum <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex items-center justify-between bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl px-8 py-5">
          <div>
            <div className="text-[#0f172a] font-bold text-sm">Weekend-only cohorts. Zero career disruption.</div>
            <div className="text-[#64748b] text-xs mt-0.5">
              Core production labs, interactive build phases, and ecosystem alignment — scheduled entirely over weekends.
            </div>
          </div>
          <a
            href="#callback"
            className="shrink-0 bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
          >
            Talk to Admissions
          </a>
        </div>
      </div>
    </section>
  );
}
