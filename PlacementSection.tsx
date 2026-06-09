import { CheckCircle, ArrowRight } from "lucide-react";

const tracks = [
  {
    title: "Hiring Hackathons",
    description: "Live judgment panels with active engineering leads from top-tier product companies. Real problems, real stakes.",
    color: "#2563eb",
  },
  {
    title: "Engineering Network Introductions",
    description: "Direct warm introductions to our 200+ partner company network — bypassing ATS filters entirely.",
    color: "#f97316",
  },
  {
    title: "Global Remote Sourcing Channels",
    description: "Access international pipeline opportunities across US, UK, and Singapore hiring corridors.",
    color: "#9333ea",
  },
  {
    title: "Native Dedicated Job Board",
    description: "Partner companies manage internal dashboards linked natively to our pipeline ecosystem for instant routing.",
    color: "#0f172a",
  },
];

const whyWorks = [
  "Hiring managers from partner firms review applications first — not HR screeners",
  "Pre-screened profiles guarantee structural competence before clearance",
  "Interview prep calibrated to actual technical bar at each target company",
  "Dedicated placement ops team tracks every application until closure",
];

export function PlacementSection() {
  return (
    <section id="outcomes" className="bg-[#0f172a] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">The SprintED 4-Track Ecosystem</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">
            Engineered to Drive Immediate Impact
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed">
            We route participants across four distinct placement tracks based on target path alignment — not just one generic job board.
          </p>
        </div>

        {/* 4 track cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {tracks.map((track, i) => (
            <div
              key={track.title}
              className="bg-[#1e293b] border border-white/5 rounded-2xl p-6 space-y-3 hover:border-white/10 transition-all duration-300 group"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: track.color }}
              >
                {i + 1}
              </div>
              <h3 className="text-white font-bold text-sm leading-tight">{track.title}</h3>
              <p className="text-[#475569] text-xs leading-relaxed">{track.description}</p>
            </div>
          ))}
        </div>

        {/* Why placement works */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#ea580c] text-xs font-bold uppercase tracking-widest mb-4">Why Our Placement Consistently Works</div>
            <h3 className="text-white text-3xl font-extrabold tracking-tight mb-6">
              Not just a job board.<br />A hiring infrastructure.
            </h3>
            <div className="space-y-4">
              {whyWorks.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#22c55e] shrink-0 mt-0.5" />
                  <span className="text-[#94a3b8] text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#callback"
              className="inline-flex items-center gap-2 mt-8 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-[0_8px_20px_rgba(249,115,22,0.3)]"
            >
              Learn About Placement <ArrowRight size={14} />
            </a>
          </div>

          {/* Placement Commitment Banner */}
          <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-2xl p-8 space-y-5">
            <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center text-white">
              <CheckCircle size={22} />
            </div>
            <div>
              <h4 className="text-[#0f172a] font-extrabold text-xl mb-3">Our Placement Assistance Commitment</h4>
              <p className="text-[#475569] text-sm leading-relaxed">
                If you complete all structural core assignments, deploy your functional data infrastructure architectures, and clear your programmatic interview milestones without landing a matching pipeline opportunity within 180 days of completion, we continue working 1:1 with you until closure.
              </p>
            </div>
            <div className="bg-white border border-[#fed7aa] rounded-xl px-5 py-3">
              <div className="text-[#0f172a] font-bold text-sm">Zero Risk Enrollment</div>
              <div className="text-[#64748b] text-xs mt-0.5">We succeed when you succeed — no conditions, no excuses.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
