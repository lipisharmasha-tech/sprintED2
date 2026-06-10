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

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className={`flex gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} whitespace-nowrap shrink-0`}>
      {items.map((co, i) => (
        <div
          key={`${co}-${i}`}
          className="inline-flex items-center justify-center bg-white border border-[#e2e8f0] rounded-xl px-4 sm:px-5 py-2 sm:py-2.5 min-w-[100px] sm:min-w-[120px]"
        >
          <span className="text-[#0f172a] font-bold text-xs sm:text-sm">{co}</span>
        </div>
      ))}
    </div>
  );
}

export function CompaniesSection() {
  const doubled = [...companies, ...companies];

  return (
    <section id="companies" className="bg-white py-16 sm:py-24 border-t border-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">

        {/* Companies marquee */}
        <div>
          <div className="text-center mb-8 sm:mb-10">
            <div className="text-[#94a3b8] text-xs font-bold uppercase tracking-widest mb-3">Now SprintED Companies</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Where Our Alumni Work
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex gap-3 overflow-hidden">
              <MarqueeRow items={doubled} />
              <MarqueeRow items={doubled} />
            </div>
          </div>
        </div>

        {/* Career Trajectories */}
        <div>
          <div className="text-center mb-8 sm:mb-10">
            <div className="text-[#1e3a8a] text-xs font-bold uppercase tracking-widest mb-3">Proven Career Trajectories</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Real Transitions. Real Numbers.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {trajectories.map((t, i) => (
              <div key={i} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-5 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#f97316] font-extrabold text-xl sm:text-2xl font-mono">{t.hike}</span>
                  <span className="text-[#94a3b8] text-xs font-semibold">salary hike</span>
                </div>
                <div className="space-y-1.5">
                  <div className="text-[#64748b] text-xs">From: <span className="text-[#0f172a] font-semibold">{t.from}</span></div>
                  <div className="text-[#94a3b8] text-xs font-mono pl-1">↓</div>
                  <div className="text-[#64748b] text-xs">To: <span className="text-[#0f172a] font-bold">{t.to}</span></div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[#e2e8f0]">
                  <span className="text-[#1e3a8a] text-[10px] sm:text-xs font-bold bg-[#eff6ff] border border-[#bfdbfe] px-2.5 py-1 rounded-full">
                    {t.cohort}
                  </span>
                  <span className="text-[#64748b] text-xs font-medium">{t.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 28s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
