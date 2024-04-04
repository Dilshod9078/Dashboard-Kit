import React from 'react'


function Table({url, title1, text1, title2, text2, title3, text3, img, btn, bacground, margin}) {
  return (
    <>
     <td className="py-[24px] px-[32px]">
        <div className="flex items-center space-x-[24px]">
            <img src={url} alt="Avatar icon" width={44} height={44}/>
            <div className="flex flex-col space-y-[4px]">
                <p className="text-[14px] text-[#252733] leading-[20px] font-semibold tracking-[0.2px]">{title1}</p>
                <span className="text-[12px] text-[#C5C7CD] leading-[16px] font-normal tracking-[0.1px]">{text1}</span>
            </div>
        </div>
     </td>

     <td className="py-[24px] pl-[32px]">
        <div className="flex flex-col space-y-[4px]">
                <p className="text-[14px] text-[#252733] leading-[20px] font-semibold tracking-[0.2px]">{title2}</p>
                <span className="text-[12px] text-[#C5C7CD] leading-[16px] font-normal tracking-[0.1px]">{text2}</span>
        </div>
     </td>

     <td className="py-[24px] px-[32px]">
        <div className="flex flex-col space-y-[4px]">
                <p className="text-[14px] text-[#252733] leading-[20px] font-semibold tracking-[0.2px]">{title3}</p>
                <span className="text-[12px] text-[#C5C7CD] leading-[16px] font-normal tracking-[0.1px]">{text3}</span>
         </div>
     </td>

     <td className="py-[24px] pl-[20px]">
         <div className="flex items-center space-x-[60px] ">
            <button className={`${bacground} ${margin} text-center transition hover:scale-110 py-[2px] px-[12px] rounded-[100px]`}>
                <span className="text-white text-[11px] leading-[13.8px] font-bold tracking-[0.5px]">{btn}</span>
            </button>
            <button>
                <img src={img} alt="icon" width={4} height={16} />
            </button>
         </div>
     </td>
     </>
  )
}

export default Table