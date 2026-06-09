import { ArrowRight, Download, PhoneCall } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-[#0f172a] overflow-hidden pt-16">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2563eb]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#f97316]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1e293b] border border-white/10 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
              <span className="text-[#94a3b8] text-xs font-medium tracking-wide uppercase">
                Now Accepting Applications — Cohort 2026
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-[-1.5px] leading-[1.08]">
                Don't just learn tech.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fb923c]">
                  Sprint into your next
                </span>{" "}
                leadership role.
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-[#94a3b8] text-lg leading-relaxed max-w-xl">
              Premium execution-focused upskilling pipelines engineered to build modern product managers, systems architects, and growth leaders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#enroll"
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-[0_8px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.45)] hover:-translate-y-0.5"
              >
                <ArrowRight size={15} />
                Enroll Now
              </a>
              <a
                href="#brochure"
                className="inline-flex items-center gap-2 bg-[#1e293b] hover:bg-[#263348] border border-[#334155] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                <Download size={15} />
                Download Brochure
              </a>
              <a
                href="#callback"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-[0_8px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_12px_28px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
              >
                <PhoneCall size={15} />
                Request a Callback
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {[
                { label: "Skill India Partner" },
                { label: "Inc42 Featured" },
                { label: "National EdTech Council" },
                { label: "YourStory Top Growth" },
              ].map((item) => (
                <span key={item.label} className="text-[#475569] text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#334155]" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats card cluster */}
          <div className="relative lg:pl-8">
            {/* Main stat card */}
            <div className="bg-[#1e293b] border border-white/8 rounded-2xl p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-[#64748b] text-xs font-semibold uppercase tracking-widest font-mono">
                  Program Outcomes
                </span>
                <span className="text-[#22c55e] text-xs font-bold bg-[#22c55e]/10 px-2 py-1 rounded-full">LIVE</span>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "94%", label: "Placement Rate" },
                  { value: "₹36.5L", label: "Avg. Package", accent: true },
                  { value: "4500+", label: "Alumni Network" },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div
                      className={`text-3xl font-extrabold tracking-tight font-mono ${
                        stat.accent ? "text-[#f97316]" : "text-white"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[#64748b] text-xs font-medium leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/5 pt-6 space-y-3">
                {[
                  { label: "Avg time to placement", value: "< 90 days" },
                  { label: "Salary hike (median)", value: "144%" },
                  { label: "Interview-to-offer ratio", value: "1:0" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="text-[#64748b] text-xs font-medium">{row.label}</span>
                    <span className="text-white text-xs font-bold font-mono">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#f97316] text-white rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-xl font-extrabold leading-none">4.8h</div>
              <div className="text-xs font-semibold opacity-80 mt-0.5">Avg Review Time</div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-20 border-t border-white/5 pt-8 pb-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "94%", label: "Placement Rate", sub: "Within 180 days of completion" },
            { number: "₹36.5 LPA", label: "Average Package", sub: "Across all data tracks", accent: true },
            { number: "4500+", label: "Alumni Network", sub: "Active professionals" },
            { number: "144%", label: "Average Hike", sub: "Minimum benchmark recorded" },
          ].map((item) => (
            <div key={item.label} className="space-y-1">
              <div className={`text-4xl font-extrabold tracking-tight font-mono ${item.accent ? "text-[#f97316]" : "text-white"}`}>
                {item.number}
              </div>
              <div className="text-white font-bold text-sm">{item.label}</div>
              <div className="text-[#475569] text-xs">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
