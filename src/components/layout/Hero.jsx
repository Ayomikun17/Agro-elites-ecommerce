import React, { useState, useEffect } from "react";
import FrozenChicken from "../../assets/frozenchicken.png"
import SmokedFish from "../../assets/smokedfish.png"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: "brand",
      bg: "bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url('https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=2000&auto=format&fit=crop')]",
      title: (
        <>
          Agro‑Elites <br />
          <span className="text-agro-yellow">Integrated Farms Limited</span>
        </>
      ),
      description: "A Nigeria‑based integrated agribusiness bringing healthy, affordable agro products to homes and businesses across Nigeria and beyond. From aquaculture and organic poultry to crops and feed production.",
    },
    {
      id: 2,
      type: "promo",
      bg: "bg-gradient-to-br from-agro-charcoal via-[#1a2e05] to-agro-green",
      title: (
        <>
          Flash Sale <br />
          <span className="text-agro-yellow">On Fresh Produce</span>
        </>
      ),
      description: "Harvest season is here! We've slashed prices on our best-selling protein and aquaculture products. Quality you trust, now at prices you'll love.",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 11000); // Updated to 15 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`flex-1 relative w-full min-h-[750px] md:min-h-[800px] flex items-center px-6 py-24 md:py-32 overflow-hidden transition-all duration-1000 ease-in-out ${slides[currentSlide].bg} bg-cover bg-center`}>
      
      {/* Creative Elements for Slide 2 (Promo) */}
      {currentSlide === 1 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-agro-yellow/10 rounded-full blur-3xl animate-pulse" />
          
          {/* Floating Promo Cards for Visual Impact */}
          <div className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2 w-full max-w-md">
            <div className="relative">
              {/* Mini Card 1 */}
              <div className="absolute -left-12 -top-20 bg-white p-4 rounded-3xl shadow-2xl rotate-[-6deg] animate-bounce duration-[5000ms] w-48">
                <div className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-full absolute -top-2 -right-2">SAVE 20%</div>
                <div className="h-24 bg-gray-100 rounded-2xl mb-2 overflow-hidden">
                   <img src={SmokedFish} alt="fish" className="w-full h-full object-cover" />
                </div>
                <p className="text-agro-charcoal font-black text-xs">Smoked Catfish</p>
                <p className="text-agro-green font-bold text-xs">₦16,000</p>
              </div>

              {/* Mini Card 2 */}
              <div className="absolute left-20 -bottom-10 bg-white p-4 rounded-3xl shadow-2xl rotate-[8deg] animate-bounce duration-[4000ms] w-56 z-10">
                <div className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-full absolute -top-2 -right-2">SAVE 25%</div>
                <div className="h-32 bg-gray-100 rounded-2xl mb-2 overflow-hidden">
                   <img src={FrozenChicken} alt="chicken" className="w-full h-full object-cover" />
                </div>
                <p className="text-agro-charcoal font-black text-sm">Organic Chicken</p>
                <p className="text-agro-green font-bold text-sm">₦6,000</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div key={currentSlide} className="animate-in fade-in slide-in-from-left-12 duration-1000">
          
          {/* Promo Tag for Slide 2 */}
          {currentSlide === 1 && (
            <div className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 animate-pulse">
              Limited Time Offer
            </div>
          )}

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
            {slides[currentSlide].title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-10 font-light leading-relaxed">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="w-full sm:w-fit">
              <button className="w-full bg-agro-yellow text-agro-charcoal px-10 py-4 rounded-xl font-black uppercase tracking-widest text-center hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg">
                {currentSlide === 0 ? "Shop Now" : "Claim Discounts"}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </a>

            {currentSlide === 0 && (
              <button className="w-full sm:w-fit border border-white/40 text-white px-10 py-4 rounded-xl font-bold hover:bg-agro-green hover:border-agro-green transition-all duration-300">
                <a href="#about">Learn More</a>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 rounded-full ${
              currentSlide === idx ? "w-12 h-2 bg-agro-yellow" : "w-2 h-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Location Badge */}
      <div className="absolute bottom-10 right-10 hidden lg:flex items-start gap-4 bg-black/40 backdrop-blur-lg p-5 rounded-2xl border border-white/10 max-w-sm">
        <div className="w-12 h-12 bg-agro-green rounded-full flex-shrink-0 flex items-center justify-center text-white shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div className="text-left">
          <p className="text-[10px] text-agro-yellow uppercase font-black tracking-[0.2em] mb-1">Visit Our Farm</p>
          <address className="not-italic text-white text-xs md:text-sm leading-relaxed font-medium">
            Behind Our Lady Bakery by<br />
            Living Faith Church, New Karu 961105,<br />
            Nasarawa, Nigeria
          </address>
        </div>
      </div>
    </section>
  );
};

export default Hero;