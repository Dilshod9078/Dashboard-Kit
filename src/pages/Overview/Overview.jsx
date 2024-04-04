import React from 'react'
import Cards from '../../components/Cards/Cards'
import Resovled from '../../components/Resovled/Resovled'
import Tasks from '../../components/Tasks/Tasks'

import SearchIcon from '../../assets/Images/search.svg'
import MessageIcon from '../../assets/Images/new.svg'
import AdminImage from '../../assets/Images/photo.svg'
import Plus from '../../assets/Images/plus.svg'
import Active from '../../assets/Images/active.svg'
import Inactive from '../../assets/Images/inactive.svg'

function Overview() {
  return (
    <div>
      <div className="flex items-center justify-between pt-[6px] pb-[4px] mb-[58px]">
        <h1 className="text-[#252733] leading-[30px] text-[24px] font-bold tracking-[0.3px]">Overview</h1>
        <div>
          <div className="flex items-center">
            <div className="flex items-center space-x-[24px]">
            <img src={SearchIcon} alt="Search icon" width={16} height={16} />
            <img src={MessageIcon} alt="Message icon" width={16} height={16} />
            </div>
            <div className="w-[1px] h-[32px] bg-[#DFE0EB] mx-[32px]"></div>
            <div className="flex items-center space-x-[14px]">
              <span className="text-[14px] text-[#252733] leading-[20px] font-semibold tracking-[0.2px]">Jones Ferdinand</span>
              <img src={AdminImage} alt="Admin image" width={44} height={44}/>
            </div>
          </div>
        </div>
      </div>
      <ul className="flex items-center justify-between mb-[30px]">
        <Cards width={"w-[258px]"} hover={"hover:border-[#3751FF]"} borderRadius={"rounded-[8px]"} border={"border-[1px] border-solid border-[#DFE0EB]"} space={"flex items-center justify-center flex-col space-y-[12px]"}>
          <h2 className="card-title text-[19px] text-[#9FA2B4] transition font-bold leading-[23.85px] tracking-[0.4px]">Unresolved</h2>
          <p className="card-bold text-[40px] text-[#252733] transition font-bold leading-[50.2px] tracking-[1px]">60</p>
        </Cards>
        <Cards width={"w-[258px]"} hover={"hover:border-[#3751FF]"} borderRadius={"rounded-[8px]"} border={"border-[1px] border-solid border-[#DFE0EB]"} space={"flex items-center justify-center flex-col space-y-[12px]"}>
          <h2 className="card-title text-[19px] text-[#9FA2B4] transition font-bold leading-[23.85px] tracking-[0.4px]">Overdue</h2>
          <p className="card-bold text-[40px] text-[#252733] transition font-bold leading-[50.2px] tracking-[1px]">16</p>
        </Cards>
        <Cards width={"w-[258px]"} hover={"hover:border-[#3751FF]"} borderRadius={"rounded-[8px]"} border={"border-[1px] border-solid border-[#DFE0EB]"} space={"flex items-center justify-center flex-col space-y-[12px]"}>
          <h2 className="card-title text-[19px] text-[#9FA2B4] transition font-bold leading-[23.85px] tracking-[0.4px]">Open</h2>
          <p className="card-bold text-[40px] text-[#252733] transition font-bold leading-[50.2px] tracking-[1px]">43</p>
        </Cards>
        <Cards width={"w-[258px]"} hover={"hover:border-[#3751FF]"} borderRadius={"rounded-[8px]"} border={"border-[1px] border-solid border-[#DFE0EB]"} space={"flex items-center justify-center flex-col space-y-[12px]"}>
          <h2 className="card-title text-[19px] text-[#9FA2B4] transition font-bold leading-[23.85px] tracking-[0.4px]">On hold</h2>
          <p className="card-bold text-[40px] text-[#252733] transition font-bold leading-[50.2px] tracking-[1px]">64</p>
        </Cards>
      </ul>

      <div className="bg-[#FFFFFF] rounded-[8px] border-[1px] border-solid border-[#DFE0EB] mb-[30px]">
        <div className="flex items-start justify-between">
          <div className="p-[32px] w-[780px]">
            <h3 className="text-[#252733] text-[19px] font-bold leading-[23.85px] mb-[8px] tracking-[0.4px]">Today’s trends</h3>
            <div className="flex items-center justify-between">
            <span className="text-[12px] text-[#9FA2B4] leading-[16px] font-normal tracking-[0.1px]">as of 25 May 2019, 09:41 PM</span>
              <div className="flex items-center  space-x-[32px]">
              <div className="flex items-center space-x-[7px]">
                <span className="w-[18px] inline-block rounded-[2px] h-[2px] border-[2px] border-solid border-[#3751FF]"></span>
                <span className="text-[#9FA2B4] text-[12px] leading-[15px] font-semibold tracking-[0.1px]">Today</span>
              </div>
              <div className="flex items-center space-x-[7px]">
              <span className="w-[18px] inline-block rounded-[2px] h-[2px] border-[2px] border-solid border-[#DFE0EB]"></span>
              <span className="text-[#9FA2B4] text-[12px] leading-[15px] font-semibold tracking-[0.1px]">Yesterday</span>
              </div>
              </div>
            </div>
          </div>
          <ul className="w-[342px] border-l-[1px] border-solid border-gray-[#DFE0EB]">
            <Cards width={"w-[100%]"} space={"flex items-center flex-col space-y-[6px]"} borderRadius={"rounded-tr-[8px] rounded-br-[8px]"} border={"border-b-[1px] border-solid border-gray"}>
              <p className="text-[19px] text-[#9FA2B4] font-bold leading-[23.85px] tracking-[0.4px]">Resolved</p>
              <p className="text-[24px] text-[#252733] font-bold leading-[30px] tracking-[1px]">449</p>
            </Cards>
            <Cards width={"w-[100%]"} space={"flex items-center flex-col space-y-[6px]"} border={"border-b-[1px] border-solid border-gray"}>
              <p className="text-[19px] text-[#9FA2B4] font-bold leading-[23.85px] tracking-[0.4px]">Received</p>
              <p className="text-[24px] text-[#252733] font-bold leading-[30px] tracking-[1px]">426</p>
            </Cards>
            <Cards width={"w-[100%]"} space={"flex items-center flex-col space-y-[6px]"} border={"border-b-[1px] border-solid border-gray"}>
              <p className="text-[19px] text-[#9FA2B4] font-bold leading-[23.85px] tracking-[0.4px]">Average first response time</p>
              <p className="text-[24px] text-[#252733] font-bold leading-[30px] tracking-[1px]">33m</p>
            </Cards>
            <Cards width={"w-[100%]"} space={"flex items-center flex-col space-y-[6px]"}  border={"border-b-[1px] border-solid border-gray"}>
              <p className="text-[19px] text-[#9FA2B4] font-bold leading-[23.85px] tracking-[0.4px]">Average response time</p>
              <p className="text-[24px] text-[#252733] font-bold leading-[30px] tracking-[1px]">3h 8m</p>
            </Cards>
            <Cards width={"w-[100%]"} space={"flex items-center flex-col space-y-[6px]"} borderRadius={"rounded-tr-[8px] rounded-br-[8px]"} border={"border-b-[1px] border-solid border-gray"}>
              <p className="text-[19px] text-[#9FA2B4] font-bold leading-[23.85px] tracking-[0.4px]">Resolution within SLA</p>
              <p className="text-[24px] text-[#252733] font-bold leading-[30px] tracking-[1px]">94%</p>
            </Cards>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="w-[520px] rounded-[8px] bg-[#fff] border-[1px] border-solid border-[#DFE0EB] pt-[32px] pb-[8px]">
            <div className="px-[32px] flex items-start justify-between mb-[16px]">
              <div>
              <h3 className="text-[19px] mb-[8px] leading-[24px] tracking-[0.4px] text-[#252733] font-bold">Unresolved tickets</h3>
              <p className="font-normal text-[12px] leading-[16px] text-[#C5C7CD] tracking-[0.1px]">Group: <strong className="font-semibold text-[12px] leading-[16px] text-[#4B506D] tracking-[0.1px]">Support</strong></p>
              </div>
              <a href="#" className="text-[#3751FF] font-semibold text-[14px] leading-[20px] tracking-[0.2px]"> View details</a>
            </div>
            <ul>
            <Resovled border={"border-b-[1px] border-solid border-[#DFE0EB]"} title={"Waiting on Feature Request"} number={"4238"}/>
            <Resovled border={"border-b-[1px] border-solid border-[#DFE0EB]"} title={"Awaiting Customer Response"} number={"1005"}/>
            <Resovled border={"border-b-[1px] border-solid border-[#DFE0EB]"} title={"Awaiting Developer Fix"} number={"914"}/>
            <Resovled  title={"Pending"} number={"281"}/>
            </ul>
        </div>
        
        <div className="w-[520px] rounded-[8px] bg-[#fff] border-[1px] border-solid border-[#DFE0EB] pt-[32px] pb-[8px]">
            <div className="px-[32px] flex items-start justify-between mb-[16px]">
              <div>
              <h3 className="text-[19px] mb-[8px] leading-[24px] tracking-[0.4px] text-[#252733] font-bold">Tasks</h3>
              <p className="font-normal text-[12px] leading-[16px] text-[#C5C7CD] tracking-[0.1px]">Today</p>
              </div>
              <a href="#" className="text-[#3751FF] font-semibold text-[14px] leading-[20px] tracking-[0.2px]"> View all</a>
            </div>
            <ul className="">
              <li className="flex items-center justify-between py-[17px] transition hover:bg-slate-300 px-[32px] border-b-[1px] border-solid border-[#DFE0EB]">
                <span className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#C5C7CD]">Create new task</span>
                <button className="p-[7px] transition hover:scale-110 bg-[#F0F1F7] rounded-[8px]">
                  <img src={Plus} alt="Plus icon" width={10} height={10} />
                </button>
              </li>
              <Tasks url={Inactive} title={"Finish ticket update"} borderBottom={"border-b-[1px] border-solid border-[#DFE0EB]"} textColor={"text-white"} text={"URGENT"} bacground={"bg-[#FEC400]"}/>
              <Tasks url={Inactive} title={"Create new ticket example"} borderBottom={"border-b-[1px] border-solid border-[#DFE0EB]"} textColor={"text-white"} text={"NEW"} bacground={"bg-[#29CC97]"}/>
              <Tasks url={Active} title={"Update ticket report"} textColor={"text-[#9FA2B4]"} text={"DEFAULT"} bacground={"bg-[#F0F1F7]"}/>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Overview