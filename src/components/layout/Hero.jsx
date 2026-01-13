import React from "react";

const Hero = () => {
  return (
    <section className="flex-1 relative w-full flex items-center px-6 py-24 md:py-32 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url('https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Main Title Stack */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
            Agro‑Elites <br />
            <span className="text-agro-yellow">Integrated Farms Limited</span>
          </h1>

          {/* Business Description */}
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-10 font-light leading-relaxed">
            A Nigeria‑based integrated agribusiness bringing{" "}
            <span className="font-semibold text-white">
              healthy, affordable agro products
            </span>{" "}
            to homes and businesses across Nigeria and beyond. From aquaculture
            and organic poultry to crops, animal husbandry, and feed production,
            we operate sustainably in New Karu and Gora, Nasarawa State—putting
            customer wellness and the environment first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-fit bg-agro-yellow text-agro-charcoal px-10 py-4 rounded-xl font-black uppercase tracking-widest text-center hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg">
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>

            <button className="w-full sm:w-fit border border-white/40 text-white px-10 py-4 rounded-xl font-bold hover:bg-agro-green hover:border-agro-green transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badge / Location Info - Bottom Right */}
      <div className="absolute bottom-10 right-10 hidden lg:flex items-start gap-4 bg-black/40 backdrop-blur-lg p-5 rounded-2xl border border-white/10 max-w-sm">
        <div className="w-12 h-12 bg-agro-green rounded-full flex-shrink-0 flex items-center justify-center text-white shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <div className="text-left">
          <p className="text-[10px] text-agro-yellow uppercase font-black tracking-[0.2em] mb-1">
            Visit Our Farm
          </p>
          <address className="not-italic text-white text-xs md:text-sm leading-relaxed font-medium">
            Behind Our Lady Bakery by
            <br />
            Living Faith Church, New Karu 961105,
            <br />
            Nasarawa, Nigeria
          </address>
        </div>
      </div>
    </section>
  );
};

export default Hero;