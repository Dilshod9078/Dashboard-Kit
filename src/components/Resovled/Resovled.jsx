import React from 'react'

function Resovled({title, number, border}) {
  return (
    <li className={`px-[32px] pt-[20px] pb-[18px] transition hover:bg-slate-300 flex items-center justify-between ${border}`}>
        <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">{title}</p>
        <span className="text-[#9FA2B4] text-[14px] leading-[20px] tracking-[0.2px] font-semibold">{number}</span>
    </li>
  )
}

export default Resovled