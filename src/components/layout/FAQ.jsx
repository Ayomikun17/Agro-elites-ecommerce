import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Do you deliver to Abuja and Nasarawa?",
      a: "Yes. Delivery is available across Abuja (FCT) and Nasarawa; pickup is available at our New Karu address."
    },
    {
      q: "Are your smoked fish approved for export?",
      a: "Smoked catfish is produced to NAFDAC specifications and packaged for export."
    },
    {
      q: "What are your Minimum Order Quantity (MOQs) for farm supplies?",
      a: (
        <ul className="space-y-1">
          <li>• <strong>Juveniles:</strong> 8 cm size; MOQ: 5,000</li>
          <li>• <strong>Broodstock:</strong> Sold per kg; MOQ: 10kg</li>
          <li>• <strong>Feeds:</strong> Custom-produced; MOQ: 100kg</li>
        </ul>
      )
    },
    {
      q: "How can I place an order?",
      a: "Order via website, WhatsApp at +234-803-513-8049, or email agro.elitesfarms@gmail.com."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-agro-green font-black uppercase tracking-[0.2em] text-[10px] mb-3">Questions & Answers</p>
          <h3 className="text-4xl font-black text-agro-charcoal">Expert Guidance</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === i ? 'border-agro-green/30 bg-agro-green/5' : 'border-gray-100 bg-gray-50'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className={`font-bold transition-colors ${openIndex === i ? 'text-agro-green' : 'text-agro-charcoal'}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-agro-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-agro-green/10 mt-2">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;