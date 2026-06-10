import { ArrowRight, Download, PhoneCall } from "lucide-react";

export function CTABand() {
  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ backgroundImage: "linear-gradient(163deg, #0f172a 0%, #1e1b4b 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
          <span className="text-[#94a3b8] text-[10px] sm:text-xs font-medium tracking-wide uppercase">Cohort 2026 — Applications Open</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-1px] sm:tracking-[-1.5px] mb-5 sm:mb-6">
          Ready to Accelerate<br />Your Career Velocity?
        </h2>

        <p className="text-[#94a3b8] text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
          SprintED — The Fast Track to Better Opportunities. Undergo structural analysis, download targeted syllabus documentation, and get started.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#enroll"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-6 sm:px-7 py-4 rounded-xl transition-all duration-200 shadow-[0_8px_20px_rgba(37,99,235,0.35)]"
          >
            <ArrowRight size={16} />
            Enroll Now
          </a>
          <a
            href="#brochure"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1e293b] hover:bg-[#263348] border border-[#334155] text-white font-bold px-6 sm:px-7 py-4 rounded-xl transition-all duration-200"
          >
            <Download size={16} />
            Download Brochure
          </a>
          <a
            href="#callback"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold px-6 sm:px-7 py-4 rounded-xl transition-all duration-200 shadow-[0_8px_20px_rgba(249,115,22,0.3)]"
          >
            <PhoneCall size={16} />
            Request a Callback
          </a>
        </div>
      </div>
    </section>
  );
}
