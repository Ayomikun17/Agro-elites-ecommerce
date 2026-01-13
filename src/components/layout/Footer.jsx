import React from "react";
import Logo1 from "../../assets/logo1.png";

// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const shopCategories = [
    { name: "Aquaculture", slug: "aquaculture" },
    { name: "Protein", slug: "protein" },
    { name: "Feeds", slug: "feeds" },
    { name: "Poultry", slug: "poultry" },
    { name: "Crops", slug: "crops" },
  ];

  const companyLinks = [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
    { name: "Shop", href: "#products" },
  ];

  const socialLinks = [
    { icon: faInstagram, link: "#" },
    { icon: faFacebookF, link: "#" },
    { icon: faWhatsapp, link: "https://wa.me/2348035138049" },
    { icon: faXTwitter, link: "#" },
  ];

  return (
    <footer className="bg-agro-green text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden p-1">
                <img
                  src={Logo1}
                  alt="Agro Elites Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                AGRO-ELITES
              </span>
            </div>
            <p className="text-green-50/80 text-base leading-relaxed">
              Premium farm-fresh produce and high-quality agricultural supplies.
              Bringing the best of the farm directly to your doorstep.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-agro-yellow hover:text-agro-charcoal transition-all text-xl"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Products Column - UPDATED LINKS */}
          <div>
            <h4 className="text-[15px] font-black uppercase tracking-widest mb-7 text-agro-yellow">
              Shop Products
            </h4>
            <ul className="space-y-4 text-[15px] text-green-50/70">
              {shopCategories.map((cat) => (
                <li key={cat.slug}>
                  <a
                    href={`#${cat.slug}`}
                    className="hover:text-agro-yellow transition-all capitalize block"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[15px] font-black uppercase tracking-widest mb-7 text-agro-yellow">
              Company
            </h4>
            <ul className="space-y-4 text-[15px] text-green-50/70">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-agro-yellow transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[15px] font-black uppercase tracking-widest mb-7 text-agro-yellow">
              Get In Touch
            </h4>
            <ul className="space-y-6 text-base text-green-50/80">
              <li className="flex items-start gap-4">
                <div className="w-6 flex justify-center pt-1 flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-agro-yellow text-xl"
                  />
                </div>
                <span>New Karu, Nasarawa / Abuja FCT</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 flex justify-center flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="text-agro-yellow text-xl"
                  />
                </div>
                <span>+234 803 513 8049</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 flex justify-center flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-agro-yellow text-xl"
                  />
                </div>
                <span className="break-all">agro.elitesfarms@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-green-100/40">
            &copy; {new Date().getFullYear()} Agro-Elites Integrated Farms
            Limited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;