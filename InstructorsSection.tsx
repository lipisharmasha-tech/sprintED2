const instructors = [
  {
    initials: "AM",
    name: "Arjun Mehta",
    role: "Ex-Staff Architect, Meta",
    roleColor: "text-[#f97316]",
    avatarBg: "bg-[#1e3a8a]",
    specialty: "Specializes in large-scale concurrent distribution networks and high-throughput system scaling.",
    programs: ["Data Engineering", "Applied GenAI"],
    yearsExp: "12+ yrs",
  },
  {
    initials: "PS",
    name: "Parag Sharma",
    role: "Principal Machine Learning Architect",
    roleColor: "text-[#1e3a8a]",
    avatarBg: "bg-[#0f172a]",
    specialty: "Expert in deep vector operations, structural parameter analytics, and cloud orchestration models.",
    programs: ["Applied ML & GenAI", "Applied GenAI"],
    yearsExp: "15+ yrs",
  },
  {
    initials: "ND",
    name: "Neha Desai",
    role: "Lead AI Scientist",
    roleColor: "text-[#9333ea]",
    avatarBg: "bg-[#f97316]",
    specialty: "Directs infrastructure loops specializing in autonomous multi-agent systems and enterprise routing tools.",
    programs: ["Applied GenAI", "Agentic AI"],
    yearsExp: "10+ yrs",
  },
];

export function InstructorsSection() {
  return (
    <section id="faculty" className="bg-[#f8fafc] py-24 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[#1e3a8a] text-xs font-bold uppercase tracking-widest mb-4">Learn From Practitioners</div>
          <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight mb-4">
            Faculty Built in the Trenches
          </h2>
          <p className="text-[#475569] text-base leading-relaxed">
            We don't employ academic lecturers. Our sessions are designed and driven entirely by tech executives, engineers, and product heads active in the industry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {instructors.map((inst) => (
            <div
              key={inst.name}
              className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Top avatar area */}
              <div className="bg-[#f8fafc] px-8 pt-8 pb-6 flex flex-col items-center text-center border-b border-[#e2e8f0]">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md ${inst.avatarBg}`}
                >
                  {inst.initials}
                </div>
                <div className="text-[#0f172a] font-bold text-lg">{inst.name}</div>
                <div className={`text-xs font-bold uppercase tracking-wider mt-1 ${inst.roleColor}`}>{inst.role}</div>
              </div>

              {/* Bottom content */}
              <div className="px-8 py-6 space-y-4">
                <p className="text-[#64748b] text-sm leading-relaxed">{inst.specialty}</p>

                <div>
                  <div className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wide mb-2">Teaches</div>
                  <div className="flex flex-wrap gap-2">
                    {inst.programs.map((p) => (
                      <span key={p} className="text-[#1e3a8a] text-xs font-bold bg-[#eff6ff] border border-[#bfdbfe] px-3 py-1 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#f1f5f9]">
                  <span className="text-[#475569] text-xs font-semibold">Industry Experience</span>
                  <span className="text-[#0f172a] font-extrabold text-sm font-mono">{inst.yearsExp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-[#94a3b8] text-sm">
            All faculty are active practitioners — no tenured academics, no passive content creators.
          </p>
        </div>
      </div>
    </section>
  );
}
