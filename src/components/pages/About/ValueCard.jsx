import React from 'react'

const ValueCard = ({ v, index }) => {
  return (
    <div
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
      <p className="text-sm text-gray-500 leading-snug">{v.desc}</p>
    </div>
  </div>
  )
}

export default ValueCard