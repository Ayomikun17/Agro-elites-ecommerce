import React, { useState } from "react";
import logoIcon from "../../assets/logo2.png"; // Path to your logo icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Products", href: "#products" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* LEFT: LOGO & BRANDING */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={logoIcon}
              alt="Agro-elites"
              className="h-10 w-auto md:h-12 transition-transform hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black text-agro-green tracking-tight leading-none">
                AGRO-ELITES
              </span>
              <span className="text-[7px] md:text-[8px] uppercase tracking-[0.15em] text-agro-charcoal font-bold mt-0.5">
                Integrated Farms Limited
              </span>
            </div>
          </div>

          {/* MIDDLE: LINKS */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-agro-charcoal hover:text-agro-green font-semibold text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* RIGHT: SHOP NOW BUTTON WITH CART */}
          <div className="hidden md:block">
            <a href="#products">
              <button className="bg-agro-green hover:bg-agro-dark text-white px-5 py-2 rounded-full font-bold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 group">
                <span>SHOP NOW</span>
                {/* Shopping Cart SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
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

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-agro-green p-2"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ${
          isOpen ? "max-h-screen border-t" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-agro-charcoal font-bold text-lg"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-agro-green text-white py-3 rounded-xl font-black shadow-md flex justify-center items-center gap-2">
            SHOP NOW
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
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
