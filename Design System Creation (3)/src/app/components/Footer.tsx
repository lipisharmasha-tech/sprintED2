import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-[#0f172a]">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-white font-extrabold text-xl tracking-tight">Sprint</span>
              <span className="text-[#f97316] font-extrabold text-xl tracking-tight">ED</span>
            </div>
            <p className="text-[#64748b] text-xs leading-relaxed">
              Premium execution-focused upskilling pipelines engineered to build modern product managers, systems architects, and growth leaders.
            </p>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <div className="text-white text-xs font-bold uppercase tracking-widest">Programs</div>
            {[
              "Applied GenAI and Agentic AI",
              "Applied Machine Learning & GenAI",
              "Data Engineering",
            ].map((item) => (
              <a key={item} href="#programs" className="block text-[#94a3b8] hover:text-white text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Company */}
          <div className="space-y-3">
            <div className="text-white text-xs font-bold uppercase tracking-widest">Company</div>
            {[
              { label: "Our Ecosystem", href: "#outcomes" },
              { label: "Verified Outcomes", href: "#outcomes" },
              { label: "Privacy Policy", href: "#" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="block text-[#94a3b8] hover:text-white text-xs transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <div className="text-white text-xs font-bold uppercase tracking-widest">Contact Admissions</div>
            <a
              href="mailto:admissions@sprinted.com"
              className="block text-[#64748b] hover:text-white text-xs transition-colors"
            >
              admissions@sprinted.com
            </a>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="text-[#475569] hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="text-[#475569] hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-xs">© 2026 SprintED Inc. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            {["Terms of Service", "Privacy Policy", "Refund Policy"].map((item) => (
              <a key={item} href="#" className="text-[#475569] hover:text-white text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
