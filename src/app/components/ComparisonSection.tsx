const rows = [
  {
    vector: "Primary Evaluation",
    sprinted: "Hiring Hackathons & Live Judgments",
    traditional: "Cold LinkedIn / Job Board Submissions",
  },
  {
    vector: "Syllabus Framework",
    sprinted: "Agentic AI Routing, Kafka Streams, Fine-Tuning",
    traditional: "Basic Boilerplate Syntax & Static Projects",
  },
  {
    vector: "Mentor Interactions",
    sprinted: "1:8 Active Executive Reviews",
    traditional: "Pre-Recorded Videos / Academic Lecturers",
  },
  {
    vector: "Placement Support",
    sprinted: "4-Track Dedicated Placement Ecosystem",
    traditional: "Generic Job Board Links Post-Completion",
  },
  {
    vector: "Cohort Size",
    sprinted: "Max 35 Per Batch — Monitored Intake",
    traditional: "Unlimited Enrollment, Mass Classroom",
  },
];

const stats = [
  { value: "144%", label: "Avg Hike", sub: "Minimum benchmark across data tracks", color: "text-[#0f172a]" },
  { value: "4.8h", label: "Review Time", sub: "Avg time to complete architecture reviews", color: "text-[#ea580c]" },
  { value: "0% in 90d", label: "Dropout", sub: "Career transformations within 3 months", color: "text-[#0f172a]" },
  { value: "1:0 Ratio", label: "Offer Rate", sub: "Interview-to-offer post hackathon", color: "text-[#172554]" },
];

export function ComparisonSection() {
  return (
    <section className="bg-[#f8fafc] py-16 sm:py-24 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="text-[#ea580c] text-xs font-bold uppercase tracking-widest mb-3">THE DELTA</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-3">
            How SprintED Compares
          </h2>
          <p className="text-[#64748b] text-sm">Standard structural updates vs traditional, passive methods.</p>
        </div>

        {/* Table — horizontal scroll on mobile */}
        <div className="max-w-5xl mx-auto mb-10 sm:mb-16 rounded-2xl overflow-hidden border border-[#f1f5f9] shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="bg-[#0f172a]">
                  <th className="text-left text-[#cbd5e1] font-semibold text-xs sm:text-sm px-4 sm:px-6 py-4 w-[30%]">Operational Vector</th>
                  <th className="text-center text-[#fb923c] font-bold text-xs sm:text-sm px-4 sm:px-6 py-4 w-[35%]">SprintED Ecosystem</th>
                  <th className="text-center text-[#94a3b8] font-medium text-xs sm:text-sm px-4 sm:px-6 py-4 w-[35%]">Traditional / Self-Study</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#f1f5f9]">
                {rows.map((row) => (
                  <tr key={row.vector}>
                    <td className="px-4 sm:px-6 py-4 text-[#0f172a] font-bold text-xs sm:text-sm">{row.vector}</td>
                    <td className="px-4 sm:px-6 py-4 text-center">
                      <span className="inline-block bg-[rgba(239,246,255,0.8)] border border-[#dbeafe] rounded-xl px-3 py-1.5 text-[#1e3a8a] font-bold text-[10px] sm:text-xs leading-snug">
                        {row.sprinted}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-center text-[#94a3b8] font-medium text-[10px] sm:text-xs">
                      {row.traditional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="sm:hidden text-center py-2 bg-[#f8fafc] text-[#94a3b8] text-[10px] font-medium border-t border-[#f1f5f9]">
            ← Scroll to see full comparison →
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4 sm:p-6 space-y-1">
              <div className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight ${stat.color}`}>{stat.value}</div>
              <div className="text-[#0f172a] font-bold text-xs sm:text-sm">{stat.label}</div>
              <div className="text-[#64748b] text-[10px] sm:text-xs leading-relaxed">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
