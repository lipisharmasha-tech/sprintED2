import { Check, X } from "lucide-react";

const rows = [
  {
    vector: "Primary Evaluation",
    sprinted: "Hiring Hackathons & Live Judgments",
    traditional: "Cold LinkedIn / Job Board Submissions",
    sprintedGood: true,
  },
  {
    vector: "Syllabus Framework",
    sprinted: "Agentic AI Routing, Kafka Streams, Fine-Tuning",
    traditional: "Basic Boilerplate Syntax & Static Projects",
    sprintedGood: true,
  },
  {
    vector: "Mentor Interactions",
    sprinted: "1:8 Active Executive Reviews",
    traditional: "Pre-Recorded Videos / Academic Lecturers",
    sprintedGood: true,
  },
  {
    vector: "Placement Support",
    sprinted: "4-Track Dedicated Placement Ecosystem",
    traditional: "Generic Job Board Links Post-Completion",
    sprintedGood: true,
  },
  {
    vector: "Cohort Size",
    sprinted: "Max 35 Per Batch — Monitored Intake",
    traditional: "Unlimited Enrollment, Mass Classroom",
    sprintedGood: true,
  },
];

const stats = [
  { value: "144%", label: "Avg Hike", sub: "Minimum benchmark recorded across data tracks", color: "text-[#0f172a]" },
  { value: "4.8h", label: "Review Time", sub: "Average time to complete deep schema and architecture reviews", color: "text-[#ea580c]" },
  { value: "0% in 90d", label: "Dropout", sub: "Professionals landing career transformations within 3 months", color: "text-[#0f172a]" },
  { value: "1:0 Ratio", label: "Offer Rate", sub: "Interview-to-offer confirmation ratio following hackathon rounds", color: "text-[#172554]" },
];

export function ComparisonSection() {
  return (
    <section className="bg-[#f8fafc] py-24 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#ea580c] text-xs font-bold uppercase tracking-widest mb-3">THE DELTA</div>
          <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight mb-3">
            How SprintED Compares
          </h2>
          <p className="text-[#64748b] text-sm">Standard structural updates vs traditional, passive methods.</p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-[#f1f5f9] shadow-lg overflow-hidden max-w-5xl mx-auto mb-16">
          {/* Table header */}
          <div className="bg-[#0f172a] grid grid-cols-3 px-6 py-4">
            <div className="text-[#cbd5e1] font-semibold text-sm">Operational Vector</div>
            <div className="text-[#fb923c] font-bold text-sm text-center">SprintED Ecosystem</div>
            <div className="text-[#94a3b8] font-medium text-sm text-center">Traditional / Self-Study</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.vector}
              className={`grid grid-cols-3 px-6 py-5 items-center ${i < rows.length - 1 ? "border-b border-[#f1f5f9]" : ""}`}
            >
              <div className="text-[#0f172a] font-bold text-sm">{row.vector}</div>

              {/* SprintED col */}
              <div className="flex items-center justify-center">
                <div className="bg-[rgba(239,246,255,0.6)] border border-[#dbeafe] rounded-xl px-4 py-2 text-center">
                  <span className="text-[#1e3a8a] font-bold text-xs">{row.sprinted}</span>
                </div>
              </div>

              {/* Traditional col */}
              <div className="text-[#94a3b8] font-medium text-xs text-center">{row.traditional}</div>
            </div>
          ))}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 space-y-1">
              <div className={`text-3xl font-extrabold font-mono tracking-tight ${stat.color}`}>{stat.value}</div>
              <div className="text-[#0f172a] font-bold text-sm">{stat.label}</div>
              <div className="text-[#64748b] text-xs leading-relaxed">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
