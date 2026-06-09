const stats = [
  { value: "144%", label: "Avg Hike", sub: "Minimum across data tracks", color: "text-[#0f172a]" },
  { value: "4.8h", label: "Review Time", sub: "Schema & architecture checks", color: "text-[#ea580c]" },
  { value: "0%", label: "Dropout in 90d", sub: "Career transformations within 3 months", color: "text-[#0f172a]" },
  { value: "1:0", label: "Offer Ratio", sub: "Post-hackathon confirmation rate", color: "text-[#172554]" },
];

const metrics = [
  { label: "Max Batch Size", value: "35 participants", note: "Monitored capacity, not open enrollment" },
  { label: "Executive Reviews", value: "1:8 ratio", note: "One mentor per eight participants maximum" },
  { label: "Weekend Hours", value: "10h / week", note: "Saturday + Sunday intensive sessions" },
  { label: "1:1 Sessions", value: "Monthly", note: "Individual architecture + career review" },
];

export function BatchScaleSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[#1e3a8a] text-xs font-bold uppercase tracking-widest">Granular Operations</div>
            <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              How Our<br />Batches Scale
            </h2>
            <p className="text-[#475569] text-base leading-relaxed">
              We avoid massive, unchecked classrooms. Our operational statistics showcase our firm commitment to maintaining individual attention and practical review paradigms across every cohort.
            </p>

            {/* Metrics */}
            <div className="space-y-3 pt-2">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-start justify-between gap-4 py-3.5 border-b border-[#f1f5f9] last:border-0"
                >
                  <div>
                    <div className="text-[#0f172a] font-bold text-sm">{m.label}</div>
                    <div className="text-[#94a3b8] text-xs mt-0.5">{m.note}</div>
                  </div>
                  <div className="text-[#1e3a8a] font-extrabold text-sm font-mono shrink-0">{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 space-y-1 hover:shadow-md transition-shadow duration-300"
              >
                <div className={`text-4xl font-extrabold font-mono tracking-tight ${stat.color}`}>{stat.value}</div>
                <div className="text-[#0f172a] font-bold text-sm">{stat.label}</div>
                <div className="text-[#64748b] text-xs leading-relaxed">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
