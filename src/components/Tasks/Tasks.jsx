import React from 'react'

function Tasks({url, title, text, bacground, textColor, borderBottom}) {
  return (
    <li className={`flex items-center transition hover:bg-slate-300 justify-between py-[17px] px-[32px] ${borderBottom}`}>
        <div className="flex items-center space-x-[16px]">
        <img src={url} alt="Galichka icon" width={20} height={20} />
        <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">{title}</p>
        </div>
        <button className={`${bacground} ${textColor} py-[5px] px-[12px] transition hover:scale-110 rounded-[8px] text-[11px] leading-[13.8px] font-bold tracking-[0.5px] text-center`}>{text}</button>
    </li>
  )
}

export default Tasks