import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Programs", href: "#programs" },
    { label: "Outcomes", href: "#outcomes" },
    { label: "Faculty", href: "#faculty" },
    { label: "Companies", href: "#companies" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span className="text-white font-extrabold text-xl tracking-tight">Sprint</span>
            <span className="text-[#f97316] font-extrabold text-xl tracking-tight">ED</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#94a3b8] hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#programs"
              className="text-[#94a3b8] hover:text-white text-sm font-medium transition-colors"
            >
              Download Brochure
            </a>
            <a
              href="#enroll"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)]"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#94a3b8] hover:text-white text-sm font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enroll"
            className="bg-[#2563eb] text-white text-sm font-bold px-5 py-2.5 rounded-xl text-center"
            onClick={() => setMobileOpen(false)}
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}
