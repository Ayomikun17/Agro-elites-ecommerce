import React from 'react'

const OperationCard = ({ op, index }) => {
  return (
    <div
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2"
  >
    <div className="h-48 w-full mb-6 overflow-hidden rounded-[1.8rem] relative">
      <img src={op.img} alt={op.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className={`absolute inset-0 bg-agro-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    </div>
    <div className="px-2">
      <h4 className="text-xl font-bold text-agro-charcoal group-hover:text-agro-green mb-4 transition-colors">
        {op.title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">{op.desc}</p>
    </div>
  </div>
  )
}

export default OperationCard