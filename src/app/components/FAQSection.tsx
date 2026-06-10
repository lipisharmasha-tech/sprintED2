import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does the 4-Track Placement ecosystem function?",
    a: "Upon core pipeline assessment clearance, applications are segmented across private hiring hackathons, direct engineering network introductions, global remote sourcing channels, or our native dedicated job boards based on target path alignment.",
  },
  {
    q: "Is there a strict entry filter for admissions?",
    a: "We pre-screen profiles for structural competence, logical analysis capabilities, and general platform dedication metrics before issuing final program admission clearances.",
  },
  {
    q: "Can I balance this alongside a heavy work schedule?",
    a: "Yes. Core production labs, interactive build phases, and ecosystem alignment checks are strategically scheduled entirely over weekends, supplemented by fast asynchronous weekly updates.",
  },
  {
    q: "How do companies access the exclusive job board?",
    a: "Partner companies manage internal dashboards linked natively to our pipeline ecosystem, granting them instantaneous routing straight to vetted participant portfolios without manual applications.",
  },
  {
    q: "What is the placement commitment guarantee?",
    a: "If you complete all structural core assignments and clear your programmatic interview milestones without landing a matching opportunity within 180 days, we continue working 1:1 with you until closure.",
  },
  {
    q: "What makes SprintED different from bootcamps or online courses?",
    a: "Every session is run by active industry practitioners — not academic lecturers. Our syllabus is built around production-grade systems and our placement ecosystem is a real hiring infrastructure, not a generic job board link.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-16 sm:py-24 border-t border-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="text-[#64748b] text-xs font-bold uppercase tracking-widest mb-3">
            Clear insights into our operational model
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Frequently Answered Questions
          </h2>
          <p className="text-[#64748b] text-sm mt-3">Selectively monitored intake criteria — demystified.</p>
        </div>

        {/* On mobile: single column. On md+: two columns */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-[#f8fafc] border rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? "border-[#2563eb]/30 shadow-md" : "border-[rgba(226,232,240,0.6)]"}`}
            >
              <button
                className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-3 sm:gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[#0f172a] font-bold text-sm leading-snug">{faq.q}</span>
                <ChevronDown
                  size={16}
                  className={`text-[#94a3b8] shrink-0 mt-0.5 transition-transform duration-300 ${open === i ? "rotate-180 text-[#2563eb]" : ""}`}
                />
              </button>

              {open === i && (
                <div className="px-5 sm:px-6 pb-4 sm:pb-5">
                  <p className="text-[#475569] text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <p className="text-[#64748b] text-sm mb-4">Still have questions?</p>
          <a
            href="mailto:admissions@sprinted.com"
            className="inline-flex items-center gap-2 border border-[#e2e8f0] hover:border-[#0f172a] text-[#0f172a] font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200"
          >
            Email Admissions →
          </a>
        </div>
      </div>
    </section>
  );
}
