import { ArrowRight, Download, PhoneCall } from "lucide-react";

export function CTABand() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundImage: "linear-gradient(163deg, #0f172a 0%, #1e1b4b 100%)" }}
    >
      {/* Radial light burst */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
          <span className="text-[#94a3b8] text-xs font-medium tracking-wide uppercase">Cohort 2026 — Applications Open</span>
        </div>

        <h2 className="text-5xl lg:text-6xl font-extrabold text-white tracking-[-1.5px] mb-6">
          Ready to Accelerate<br />Your Career Velocity?
        </h2>

        <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          SprintED — The Fast Track to Better Opportunities. Undergo structural analysis, download targeted syllabus documentation, and get started.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#enroll"
            className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-[0_8px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.45)] hover:-translate-y-0.5"
          >
            <ArrowRight size={16} />
            Enroll Now
          </a>
          <a
            href="#brochure"
            className="inline-flex items-center gap-2 bg-[#1e293b] hover:bg-[#263348] border border-[#334155] text-white font-bold px-7 py-4 rounded-xl transition-all duration-200"
          >
            <Download size={16} />
            Download Brochure
          </a>
          <a
            href="#callback"
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-[0_8px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_12px_30px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
          >
            <PhoneCall size={16} />
            Request a Callback
          </a>
        </div>
      </div>
    </section>
  );
}
