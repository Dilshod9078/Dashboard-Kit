import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlink({url, children, title}) {
  return (
    <NavLink className={`text-[#A4A6B3] transition hover:bg-slate-500 py-[20px] pl-[32px] relative flex items-center space-x-[24px]`} to={url}>
      {children}
      <span className="text-[16px] leading-[20px] font-medium">{title}</span>
    </NavLink>
  )
}

export default Navlink