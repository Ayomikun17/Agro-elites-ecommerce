import { ValueCard } from "./ValueCard";

const values = [
  {
    title: "Health",
    desc: "Nutritious products handled with care.",
    icon: "🌱",
  },
  {
    title: "Quality",
    desc: "Hygiene, biosecurity, and cold‑chain.",
    icon: "🏆",
  },
  {
    title: "Sustainability",
    desc: "Smart water use & waste minimisation.",
    icon: "♻️",
  },
  {
    title: "Affordability",
    desc: "Fair pricing without cutting corners.",
    icon: "💰",
  },
  { title: "Integrity", desc: "Honest work for local families.", icon: "🤝" },
];

export const Story = () => (
  <section id="our-story" className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-5 gap-16 items-center">
        <div className="lg:col-span-3" data-aos="fade-right">
          <h2 className="text-agro-green font-bold tracking-[0.3em] uppercase text-sm mb-6">
            Our Story
          </h2>
          <h3 className="text-3xl lg:text-5xl font-black text-gray-900 mb-8 italic">
            "Farm-to-table freshness"
          </h3>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 font-light">
            Born from a passion for freshness, Agro‑Elites integrates multiple
            farming systems...
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <ValueCard key={v.title} v={v} index={i} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-2" data-aos="zoom-in-left">
          <img
            src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1200"
            className="rounded-[2.5rem] shadow-xl h-[550px] w-full object-cover"
            alt="Farmer"
          />
        </div>
      </div>
    </div>
  </section>
);
export default Story;
