import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Riya Kapoor",
    role: "ML Engineer @ Zepto",
    prev: "Business Analyst @ TCS",
    hike: "+190%",
    cohort: "Applied ML Track",
    avatarBg: "bg-[#1e3a8a]",
    initials: "RK",
    quote:
      "SprintED didn't just teach me ML — it rebuilt how I think about systems. The 1:8 executive review model is unlike anything I've experienced. Four months after graduating, I was a Senior ML Engineer at Zepto.",
  },
  {
    name: "Dhruv Menon",
    role: "Staff Data Engineer @ Microsoft",
    prev: "Data Engineer @ Infosys",
    hike: "+185%",
    cohort: "Data Engineering",
    avatarBg: "bg-[#f97316]",
    initials: "DM",
    quote:
      "The weekend-only structure was perfect — I didn't have to quit my job. Every session was run by someone who'd shipped at scale. The placement network routed me directly to Microsoft engineering leadership.",
  },
  {
    name: "Ananya Singh",
    role: "Senior PM @ Razorpay",
    prev: "Product Manager @ IT Services",
    hike: "+155%",
    cohort: "Applied GenAI Track",
    avatarBg: "bg-[#9333ea]",
    initials: "AS",
    quote:
      "I landed at Razorpay through the hiring hackathon — not a single LinkedIn cold application. SprintED's placement commitment is real; they worked with me 1:1 until the offer was signed.",
  },
  {
    name: "Vikram Nair",
    role: "Agentic AI Lead @ CRED",
    prev: "Backend Developer @ Startup",
    hike: "+210%",
    cohort: "Applied GenAI Track",
    avatarBg: "bg-[#0f172a]",
    initials: "VN",
    quote:
      "The GenAI curriculum was actually 6 months ahead of what I saw in interviews. CRED reached out to me through the native job board before I even finished the program.",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="bg-[#0f172a] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="text-[#94a3b8] text-xs font-bold uppercase tracking-widest mb-4">What Our Students Say</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Student Production Work Showcases
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1e293b] border border-white/8 rounded-2xl p-6 sm:p-10 relative">
            <Quote size={28} className="text-[#f97316]/30 mb-5 sm:mb-6" />

            <blockquote className="text-[#e2e8f0] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
              "{t.quote}"
            </blockquote>

            {/* Author row — stacks on mobile */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shrink-0 ${t.avatarBg}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-bold text-sm sm:text-base">{t.name}</div>
                  <div className="text-[#64748b] text-xs sm:text-sm">{t.role}</div>
                  <div className="text-[#475569] text-[10px] sm:text-xs mt-0.5">Previously: {t.prev}</div>
                </div>
              </div>

              <div className="flex sm:flex-col sm:text-right items-center sm:items-end gap-3 sm:gap-0">
                <div className="text-[#f97316] font-extrabold text-xl sm:text-2xl font-mono">{t.hike}</div>
                <div className="text-[#64748b] text-xs sm:mt-0.5">{t.cohort}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-white/30 transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#f97316] w-6" : "bg-white/20 w-1.5"}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-white/30 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
