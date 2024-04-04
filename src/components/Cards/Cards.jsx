import React from 'react'

function Cards({hover, borderRadius, border, width, space, children}) {
  return (
    <li className={` ${width} ${hover} ${borderRadius}  ${border} ${space} cursor-pointer item bg-white transition py-[24px] px-[32px]`}>
        {children}
    </li>
  )
}

export default Cards