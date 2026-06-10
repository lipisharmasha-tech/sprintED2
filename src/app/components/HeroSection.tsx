import { ArrowRight, Download, PhoneCall } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-[#0f172a] overflow-hidden pt-16">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[400px] bg-[#2563eb]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1e293b] border border-white/10 rounded-full px-3 py-1.5 mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse shrink-0" />
          <span className="text-[#94a3b8] text-[10px] sm:text-xs font-medium tracking-wide uppercase">
            Now Accepting Applications — Cohort 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-1px] sm:tracking-[-1.5px] leading-[1.1] max-w-3xl mb-5 sm:mb-6">
          Don't just learn tech.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fb923c]">
            Sprint into your next
          </span>{" "}
          leadership role.
        </h1>

        {/* Subheading */}
        <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-2xl mb-8 sm:mb-10">
          Premium execution-focused upskilling pipelines engineered to build modern product managers, systems architects, and growth leaders.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
          <a
            href="#enroll"
            className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-[0_8px_20px_rgba(37,99,235,0.35)]"
          >
            <ArrowRight size={15} />
            Enroll Now
          </a>
          <a
            href="#brochure"
            className="inline-flex items-center justify-center gap-2 bg-[#1e293b] hover:bg-[#263348] border border-[#334155] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200"
          >
            <Download size={15} />
            Download Brochure
          </a>
          <a
            href="#callback"
            className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-[0_8px_20px_rgba(249,115,22,0.3)]"
          >
            <PhoneCall size={15} />
            Request a Callback
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 pb-8 sm:pb-10">
          {["Skill India Partner", "Inc42 Featured", "National EdTech Council", "YourStory Top Growth"].map((item) => (
            <span key={item} className="text-[#475569] text-[10px] sm:text-xs font-semibold flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#334155]" />
              {item}
            </span>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div className="border-t border-white/5 pt-8 pb-10 sm:pb-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: "94%", label: "Placement Rate", sub: "Within 180 days" },
            { number: "₹36.5L", label: "Avg Package", sub: "Across data tracks", accent: true },
            { number: "4500+", label: "Alumni Network", sub: "Active professionals" },
            { number: "144%", label: "Average Hike", sub: "Minimum benchmark" },
          ].map((item) => (
            <div key={item.label} className="space-y-0.5">
              <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-mono ${item.accent ? "text-[#f97316]" : "text-white"}`}>
                {item.number}
              </div>
              <div className="text-white font-bold text-xs sm:text-sm">{item.label}</div>
              <div className="text-[#475569] text-[10px] sm:text-xs">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
