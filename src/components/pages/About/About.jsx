import React, { useEffect, useState } from "react"; // Added useState
import AOS from "aos";
import "aos/dist/aos.css";
import Farmer from "../../../assets/farmer.jpg";
import Catfish from "../../../assets/catfish2.png";
import Poultry from "../../../assets/poultry2.jpg";
import Crops from "../../../assets/crops.jpg";
import Cows from "../../../assets/cows2.jpg";
import Feed from "../../../assets/feed.png";
import Tractor from "../../../assets/tractor.jpg";
import FreshCrops from "../../../assets/fresh-crops.jpg";
import ContactUs from "../../../assets/contact.jpg";

const About = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const companyPhone = "2348035138049";
    const text = `Hello, My name is ${formData.fullName}, I would like to schedule a farm visit. ${formData.message}. Contact details: +234${formData.phone} and ${formData.email}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${companyPhone}?text=${encodedText}`, "_blank");
  };

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

  return (
    <main className="bg-white font-sans overflow-x-hidden">
      {/* SECTION 1: OUR STORY & VALUES - Added id="about" */}
      <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:pl-20 lg:pr-12">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-3" data-aos="fade-right">
              <h2 className="text-agro-green font-bold tracking-[0.3em] uppercase text-sm mb-6">
                Our Story
              </h2>
              <h3 className="text-3xl lg:text-5xl font-black text-gray-900 mb-8 italic leading-tight">
                "Farm-to-table freshness"
              </h3>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 font-light">
                Born from a passion for freshness, Agro‑Elites integrates
                multiple farming systems. Our{" "}
                <span className="font-semibold text-agro-charcoal underline decoration-agro-yellow decoration-2 underline-offset-4">
                  circular approach
                </span>{" "}
                reduces waste, boosts efficiency, and ensures every product
                meets our rigorous standards for wellness.
              </p>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xl font-bold text-agro-charcoal mb-6">
                  Our Values
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  {values.map((v, index) => (
                    <div
                      key={v.title}
                      className="flex items-start gap-4 group"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <span className="text-2xl mt-1 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                        {v.icon}
                      </span>
                      <div>
                        <p className="font-bold text-agro-charcoal text-base group-hover:text-agro-green transition-colors">
                          {v.title}
                        </p>
                        <p className="text-sm text-gray-500 leading-snug">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 relative" data-aos="zoom-in-left">
              <div className="absolute -inset-6 bg-agro-green/5 blur-3xl rounded-full -z-10 animate-pulse"></div>
              <img
                src={Farmer}
                className="rounded-[2.5rem] shadow-xl h-[400px] lg:h-[550px] w-full object-cover transform transition-transform duration-700 hover:scale-105"
                alt="African Farmer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MISSION & VISION */}
      <section className="py-24 md:py-32 bg-gray-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:pl-20 lg:pr-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-3 space-y-12" data-aos="fade-up">
              <div className="space-y-4">
                <p className="text-agro-green text-sm font-bold tracking-[0.2em] uppercase">
                  Bridging the gap
                </p>
                <h2 className="text-3xl md:text-5xl font-black text-agro-charcoal leading-tight">
                  What makes us who we are.
                </h2>
              </div>

              <div className="space-y-10">
                <div
                  className="border-l-4 border-agro-yellow pl-6"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <h4 className="text-xl font-bold text-agro-dark mb-3">
                    Our Mission
                  </h4>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    Our mission is to ensure that families and businesses have
                    access to the highest quality farm-fresh food items at
                    affordable prices.
                  </p>
                </div>

                <div
                  className="border-l-4 border-agro-green pl-6"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <h4 className="text-xl font-bold text-agro-dark mb-3">
                    Our Vision
                  </h4>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    We envision an alternative food system for Nigeria that is
                    both smart and super-efficient.
                  </p>
                </div>
              </div>

              <div className="pt-4" data-aos="zoom-in">
                <a href="#products">
                  <button className="bg-agro-yellow hover:bg-agro-charcoal text-white px-8 py-3 rounded-full font-bold text-sm shadow-md transition-all active:scale-95 flex items-center gap-3 group">
                    <span>SHOP NOW</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 relative" data-aos="fade-left">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-200">
                <img
                  src={FreshCrops}
                  alt="Agro-Elites Farm View"
                  className="w-full h-[500px] lg:h-[600px] object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR OPERATIONS CARDS */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center" data-aos="fade-down">
            <h2 className="text-agro-green font-bold tracking-[0.3em] uppercase text-sm mb-4">
              What We Do
            </h2>
            <h3 className="text-3xl lg:text-5xl font-black text-agro-charcoal max-w-2xl mx-auto">
              Our Operations
            </h3>
            <div className="w-12 h-1 bg-agro-yellow mx-auto mt-6 rounded-full animate-bounce"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {[
              {
                title: "Aquaculture",
                color: "agro-green",
                img: Catfish,
                desc: "Hatchery, grow‑out ponds, and processing of catfish. Including NAFDAC‑spec smoked catfish.",
              },
              {
                title: "Organic Poultry",
                color: "agro-yellow",
                img: Poultry,
                desc: "Raising broilers, turkeys, and layers with a focus on health. Clean dressing and professional cold‑chain storage.",
              },
              {
                title: "Crops",
                color: "agro-green",
                img: Crops,
                desc: "Large-scale seasonal cultivation of maize and soybeans, forming the backbone of our integrated feed system.",
              },
              {
                title: "Animal Husbandry",
                color: "agro-yellow",
                img: Cows,
                desc: "Quality goat and beef production. We provide professional butchery services processed to order.",
              },
              {
                title: "Feeds",
                color: "agro-green",
                img: Feed,
                desc: "Custom fish & poultry feeds produced to farm-specific stages (species, stage, and target FCR).",
              },
            ].map((op, index) => (
              <div
                key={op.title}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="h-48 w-full mb-6 overflow-hidden rounded-[1.8rem] relative">
                  <img
                    src={op.img}
                    alt={op.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-${op.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                </div>
                <div className="px-2">
                  <h4 className={`text-xl font-bold text-${op.color} mb-4`}>
                    {op.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {op.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: QUALITY & FOOD SAFETY */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:pl-20 lg:pr-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1" data-aos="fade-right">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-agro-yellow/20 rounded-full blur-2xl animate-pulse"></div>
              <img
                src={Tractor}
                className="rounded-[2.5rem] shadow-xl h-[400px] lg:h-[550px] w-full object-cover transform transition-transform duration-700 hover:scale-105"
                alt="Modern Farmer"
              />
              {/* <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100 animate-bounce-slow">
                <div className="bg-agro-green p-2 rounded-full text-white">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-black text-agro-charcoal uppercase tracking-tighter">
                    NAFDAC
                  </p>
                  <p className="text-[10px] text-gray-500">Certified Quality</p>
                </div>
              </div> */}
            </div>

            <div className="order-1 lg:order-2" data-aos="fade-left">
              <h2 className="text-agro-green font-bold tracking-[0.3em] uppercase text-sm mb-4">
                Your Health First
              </h2>
              <h3 className="text-3xl lg:text-5xl font-black text-agro-charcoal mb-6 leading-tight">
                Quality & Food Safety
              </h3>
              <p className="text-agro-yellow font-bold text-lg mb-8 italic">
                "Your safe consumption is our priority"
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                We follow clean handling, biosecurity, and cold‑chain for frozen
                poultry. Smoked fish is produced to{" "}
                <span className="font-semibold text-agro-charcoal">
                  NAFDAC specifications
                </span>{" "}
                and packaged for long‑lasting quality—ready to ship abroad.
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-black text-agro-green">
                    100%
                  </div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">
                    Organic
                  </p>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-black text-agro-green">0%</div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">
                    Additives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMMUNITY & SUPPLY */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:pl-20 lg:pr-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-agro-green font-bold tracking-[0.3em] uppercase text-sm mb-4">
                Our Ecosystem
              </h2>
              <h3 className="text-3xl lg:text-5xl font-black text-agro-charcoal mb-6 leading-tight">
                Community & Supply
              </h3>
              <p className="text-agro-yellow font-bold text-lg mb-8 italic">
                Connecting local farms to national tables.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                We serve{" "}
                <span className="text-agro-charcoal font-semibold">
                  households, retailers, restaurants, and hotels
                </span>{" "}
                in Abuja and Nasarawa, and support farmers nationwide with
                juveniles (8 cm), broodstock (sold per kg), and customised
                feeds.
              </p>
            </div>

            <div
              className="relative flex justify-center items-center"
              data-aos="zoom-in"
            >
              <div className="relative w-full max-w-lg shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
                <img
                  src="https://www.mapsofworld.com/nigeria/maps/nigeria-political-map.jpg"
                  alt="Detailed Political Map of Nigeria"
                  className="w-full h-auto object-cover"
                />

                <div className="absolute top-[44%] left-[45%] group cursor-pointer">
                  <div className="absolute -inset-3 bg-agro-yellow/40 rounded-full animate-ping"></div>
                  <div className="relative bg-agro-yellow w-5 h-5 rounded-full border-2 border-white shadow-xl flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-agro-charcoal rounded-full"></div>
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-agro-charcoal text-white text-[10px] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-black uppercase tracking-widest shadow-2xl z-20">
                    Abuja Hub
                  </div>
                </div>

                <div className="absolute top-[46%] left-[54%] group cursor-pointer">
                  <div className="absolute -inset-3 bg-agro-green/40 rounded-full animate-ping delay-500"></div>
                  <div className="relative bg-agro-green w-5 h-5 rounded-full border-2 border-white shadow-xl flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-agro-charcoal text-white text-[10px] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-black uppercase tracking-widest shadow-2xl z-20">
                    Nasarawa Farms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CONTACT US - Added id="contact" */}
      <section id="contact" className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
              data-aos="fade-right"
            >
              <div className="mb-10">
                <p className="text-agro-green font-bold tracking-widest uppercase text-xs mb-3">
                  Get in touch!
                </p>
                <h2 className="text-4xl font-black text-agro-charcoal">
                  Schedule a Farm Visit
                </h2>
              </div>

              <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-agro-green focus:ring-1 focus:ring-agro-green transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="flex">
                    <div className="flex items-center gap-2 px-4 py-4 rounded-l-xl bg-gray-100 border border-r-0 border-gray-200 text-gray-600 font-semibold text-sm">
                      <img
                        src="https://flagcdn.com/w20/ng.png"
                        alt="Nigeria"
                        className="w-5"
                      />
                      <span>+234</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="803 000 0000"
                      className="w-full px-6 py-4 rounded-r-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-agro-green focus:ring-1 focus:ring-agro-green transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-agro-green focus:ring-1 focus:ring-agro-green transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell us about your planned visit..."
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-agro-green focus:ring-1 focus:ring-agro-green transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-agro-yellow text-agro-charcoal font-black uppercase tracking-widest py-5 rounded-xl hover:bg-agro-charcoal hover:text-white transition-all duration-300 shadow-lg shadow-agro-yellow/20 active:scale-95"
                >
                  Schedule Visit
                </button>
              </form>
            </div>

            <div className="space-y-6" data-aos="fade-left">
              <div className="rounded-[2.5rem] overflow-hidden h-[340px] shadow-xl border-4 border-white">
                <img
                  src={ContactUs}
                  alt="Agro-Elites Farmer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-5 hover:border-agro-green/30 transition-colors">
                <div className="w-12 h-12 bg-agro-green/10 rounded-xl flex items-center justify-center text-agro-green flex-shrink-0">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div className="flex-1 lg:flex lg:items-center lg:justify-between lg:gap-6">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                      Email Us
                    </p>
                    <p className="text-agro-charcoal font-bold mb-4 lg:mb-0">
                      agro.elitesfarms@gmail.com
                    </p>
                  </div>

                  <a
                    href="mailto:agro.elitesfarms@gmail.com"
                    className="inline-flex items-center justify-center bg-agro-yellow text-agro-charcoal px-5 py-2.5 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-agro-charcoal hover:text-white transition-all shadow-md active:scale-95 whitespace-nowrap"
                  >
                    Send Message
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-6 hover:border-agro-green/30 transition-colors">
                <div className="flex items-start gap-5 w-full">
                  <div className="w-12 h-12 bg-agro-yellow/10 rounded-xl flex items-center justify-center text-agro-yellow flex-shrink-0">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                      WhatsApp / Call
                    </p>
                    <p className="text-agro-charcoal font-bold">
                      +234-803-513-8049
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/2348035138049"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-5 hover:border-agro-green/30 transition-colors">
                <div className="w-12 h-12 bg-agro-charcoal/10 rounded-xl flex items-center justify-center text-agro-charcoal flex-shrink-0">
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
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                    Our Location
                  </p>
                  <address className="not-italic text-agro-charcoal font-bold leading-relaxed">
                    Behind Our Lady Bakery by Living Faith Church,
                    <br />
                    New Karu 961105, Nasarawa, Nigeria
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;