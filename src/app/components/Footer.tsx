import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-10 border-b border-[#0f172a]">
          {/* Brand — full width on smallest screens */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-white font-extrabold text-xl tracking-tight">Sprint</span>
              <span className="text-[#f97316] font-extrabold text-xl tracking-tight">ED</span>
            </div>
            <p className="text-[#64748b] text-xs leading-relaxed max-w-xs">
              Premium execution-focused upskilling pipelines engineered to build modern product managers, systems architects, and growth leaders.
            </p>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <div className="text-white text-xs font-bold uppercase tracking-widest">Programs</div>
            {["Applied GenAI and Agentic AI", "Applied ML & GenAI", "Data Engineering"].map((item) => (
              <a key={item} href="#programs" className="block text-[#94a3b8] hover:text-white text-xs transition-colors leading-snug">
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
            <div className="text-white text-xs font-bold uppercase tracking-widest">Contact</div>
            <a href="mailto:admissions@sprinted.com" className="block text-[#64748b] hover:text-white text-xs transition-colors break-all">
              admissions@sprinted.com
            </a>
            <div className="flex items-center gap-3 pt-1">
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
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[#475569] text-xs">© 2026 SprintED Inc. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
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
