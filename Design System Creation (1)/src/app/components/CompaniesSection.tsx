const companies = [
  "Google", "Meta", "Microsoft", "Amazon", "Flipkart",
  "Razorpay", "Swiggy", "Zepto", "CRED", "PhonePe",
  "Meesho", "Groww", "Paytm", "Zomato", "Ola",
  "InMobi", "Freshworks", "Chargebee", "Browserstack", "Postman",
];

const trajectories = [
  {
    from: "Data Analyst @ Mid-cap",
    to: "Senior ML Engineer @ Unicorn",
    hike: "+210%",
    time: "4 months",
    cohort: "GenAI Track",
  },
  {
    from: "Backend Dev @ Startup",
    to: "Staff Engineer @ FAANG",
    hike: "+185%",
    time: "6 months",
    cohort: "Data Engineering",
  },
  {
    from: "Product Manager @ IT Services",
    to: "Senior PM @ Series-C",
    hike: "+155%",
    time: "5 months",
    cohort: "Applied ML Track",
  },
];

export function CompaniesSection() {
  return (
    <section id="companies" className="bg-white py-24 border-t border-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

        {/* Companies */}
        <div>
          <div className="text-center mb-10">
            <div className="text-[#94a3b8] text-xs font-bold uppercase tracking-widest mb-3">Now SprintED Companies</div>
            <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Where Our Alumni Work
            </h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3">
            {companies.map((co) => (
              <div
                key={co}
                className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-3 py-3 text-center hover:border-[#2563eb]/30 hover:bg-[#eff6ff] transition-all duration-200 cursor-default"
              >
                <span className="text-[#0f172a] font-bold text-xs">{co}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Trajectories */}
        <div>
          <div className="text-center mb-10">
            <div className="text-[#1e3a8a] text-xs font-bold uppercase tracking-widest mb-3">Proven Career Trajectories</div>
            <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Real Transitions. Real Numbers.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trajectories.map((t, i) => (
              <div key={i} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#f97316] font-extrabold text-2xl font-mono">{t.hike}</span>
                  <span className="text-[#94a3b8] text-xs font-semibold">hike</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#64748b] text-xs">From</span>
                    <span className="text-[#0f172a] font-semibold text-xs">{t.from}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-4 h-px bg-[#94a3b8]" />
                    <span className="text-[#94a3b8] font-medium">→</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#64748b] text-xs">To</span>
                    <span className="text-[#0f172a] font-bold text-xs">{t.to}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#e2e8f0]">
                  <span className="text-[#1e3a8a] text-xs font-bold bg-[#eff6ff] border border-[#bfdbfe] px-2.5 py-1 rounded-full">
                    {t.cohort}
                  </span>
                  <span className="text-[#64748b] text-xs font-medium">{t.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
