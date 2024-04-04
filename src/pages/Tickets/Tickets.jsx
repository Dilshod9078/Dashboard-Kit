import React from 'react'
import Table from '../../components/Table/Table'

import  Search from '../../assets/Images/search.svg'
import  Message from '../../assets/Images/news.svg'
import  Admin from '../../assets/Images/photo.svg'
import Sort from '../../assets/Images/sort.svg'
import Filter from '../../assets/Images/filter.svg'
import MoreIcon from '../../assets/Images/Vector.svg'
import Avatar1 from '../../assets/Images/img1.svg'
import Avatar2 from '../../assets/Images/img2.svg'
import Avatar3 from '../../assets/Images/img3.svg'
import Avatar4 from '../../assets/Images/img4.svg'
import Avatar5 from '../../assets/Images/img5.svg'
import Avatar6 from '../../assets/Images/img6.svg'
import Avatar7 from '../../assets/Images/img7.svg'
import Avatar8 from '../../assets/Images/img8.svg'
import Dropdown from '../../assets/Images/dropdown.svg'
import Left from '../../assets/Images/left.svg'
import Right from '../../assets/Images/right.svg'

function Tickets() {
  return (
    <div className="overflow-auto">
    <div className="flex items-center justify-between pt-[6px] pb-[4px] mb-[54px]">
      <h1 className="text-[#252733] leading-[30px] text-[24px] font-bold tracking-[0.3px]">Tickets</h1>
      <div>
          <div className="flex items-center">
            <div className="flex items-center space-x-[24px]">
            <img src={Search} alt="Search icon" width={16} height={16} />
            <img src={Message} alt="Message icon" width={16} height={16} />
            </div>
            <div className="w-[1px] h-[32px] bg-[#DFE0EB] mx-[32px]"></div>
            <div className="flex items-center space-x-[14px]">
              <span className="text-[14px] text-[#252733] leading-[20px] font-semibold tracking-[0.2px]">Jones Ferdinand</span>
              <img src={Admin} alt="Admin image" width={44} height={44}/>
            </div>
          </div>
        </div>
    </div>
     <div className="bg-white rounded-[8px] border-[1px] border-solid border-[#DFE0EB] pt-[32px] pb-[27px]">
      <div className="flex items-center px-[32px]  justify-between mb-[48px]">
        <h2 className="text-[19px] leading-[23.84px] tracking-[0.4px] font-bold text-[#252733]">All tickets</h2>
        <div className="flex items-center space-x-[32px]">
          <div className="flex items-center space-x-[8px]">
            <button>
            <img src={Sort} alt="Sort icon" width={16} height={16} />
            </button>
            <span className="text-[14px] font-semibold leading-[20px] text-[#4B506D] tracking-[0.2px]">Sort</span>
          </div>
          <div className="flex items-center space-x-[8px]">
            <button>
            <img src={Filter} alt="Filter icon" width={16} height={16} />
            </button>
            <span className="text-[14px] font-semibold leading-[20px] text-[#4B506D] tracking-[0.2px]">Filter</span>
          </div>
        </div>
      </div>
        
         <table className="px-[32px] mb-[24px]">
          <thead>
            <tr className="border-b-[1.5px] border-solid border-[#DFE0EB]">
              <th className="w-[450px] pb-[12px] text-start pl-[32px] text-[14px] text-[#9FA2B4] leading-[17.57px] font-bold tracking-[0.2px]">Ticket details</th>
              <th className="w-[250px] pb-[12px] text-start pl-[32px] text-[14px] text-[#9FA2B4] leading-[17.57px] font-bold tracking-[0.2px]">Customer name</th>
              <th className="w-[200px] pb-[12px] text-start pl-[32px] text-[14px] text-[#9FA2B4] leading-[17.57px] font-bold tracking-[0.2px]">Date</th>
              <th className="w-[190px] pb-[12px] text-start pl-[20px] text-[14px] text-[#9FA2B4] leading-[17.57px] font-bold tracking-[0.2px]">Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-[1.5px] transition hover:bg-[#F7F8FF]  border-solid border-[#DFE0EB]">
              <Table url={Avatar1} title1={"Contact Email not Linked"} text1={"Updated 1 day ago"} title2={"Tom Cruise"} text2={"on 24.05.2019"} title3={"May 26, 2019"} text3={"6:30 PM"} btn={"HIGH"} bacground={"bg-[#F12B2C]"} margin={"mr-[22px]"} img={MoreIcon} />
            </tr>
            <tr className="border-b-[1.5px] transition hover:bg-[#F7F8FF] border-solid border-[#DFE0EB]">
              <Table url={Avatar2} title1={"Adding Images to Featured Posts"} text1={"Updated 1 day ago"} title2={"Matt Damon"} text2={"on 24.05.2019"} title3={"May 26, 2019"} text3={"8:00 AM"} btn={"LOW"} bacground={"bg-[#FEC400]"} margin={"mr-[24px]"} img={MoreIcon} />
            </tr>
            <tr className="border-b-[1.5px] transition hover:bg-[#F7F8FF] border-solid border-[#DFE0EB]">
              <Table url={Avatar3} title1={"When will I be charged this month?"} text1={"Updated 1 day ago"} title2={"Robert Downey"} text2={"on 24.05.2019"} title3={"May 26, 2019"} text3={"7:30 PM"} btn={"HIGH"} bacground={"bg-[#F12B2C]"} margin={"mr-[22px]"} img={MoreIcon} />
            </tr>
            <tr className="border-b-[1.5px] transition hover:bg-[#F7F8FF] border-solid border-[#DFE0EB]">
              <Table url={Avatar4} title1={"Payment not going through"} text1={"Updated 2 day ago"} title2={"Christian Bale"} text2={"on 24.05.2019"} title3={"May 25, 2019"} text3={"5:00 PM"} btn={"NORMAL"} bacground={"bg-[#29CC97]"} img={MoreIcon} />
            </tr>
            <tr className="border-b-[1.5px] transition hover:bg-[#F7F8FF] border-solid border-[#DFE0EB]">
              <Table url={Avatar5} title1={"Unable to add replies"} text1={"Updated 2 day ago"} title2={"Henry Cavil"} text2={"on 24.05.2019"} title3={"May 25, 2019"} text3={"4:00 PM"} btn={"HIGH"} bacground={"bg-[#F12B2C]"} margin={"mr-[22px]"} img={MoreIcon} />
            </tr>
            <tr className="border-b-[1.5px] transition hover:bg-[#F7F8FF] border-solid border-[#DFE0EB]">
              <Table url={Avatar6} title1={"Downtime since last week"} text1={"Updated 3 day ago"} title2={"Chris Evans"} text2={"on 23.05.2019"} title3={"May 25, 2019"} text3={"2:00 PM"} btn={"NORMAL"} bacground={"bg-[#29CC97]"} img={MoreIcon} />
            </tr>
            <tr className="border-b-[1.5px] transition hover:bg-[#F7F8FF] border-solid border-[#DFE0EB]">
              <Table url={Avatar7} title1={"Referral Bonus"} text1={"Updated 4 day ago"} title2={"Sam Smith"} text2={"on 22.05.2019"} title3={"May 25, 2019"} text3={"11:30 AM"} btn={"LOW"} bacground={"bg-[#FEC400]"} margin={"mr-[24px]"} img={MoreIcon} />
            </tr>
            <tr className="border-b-[1.5px] transition hover:bg-[#F7F8FF] border-solid border-[#DFE0EB]">
              <Table url={Avatar8} title1={"How do I change my password?"} text1={"Updated 6 day ago"} title2={"Steve Rogers"} text2={"on 21.05.2019"} title3={"May 24, 2019"} text3={"1:00 PM"} btn={"NORMAL"} bacground={"bg-[#29CC97]"} img={MoreIcon} />
            </tr>
          </tbody>
         </table>
         <div className="flex items-center justify-end space-x-[48px] px-[32px]">
              <div className="flex items-center space-x-[8px]">
                <span className="text-[#9FA2B4] text-[14px] leading-[20px] tracking-[0.3px] font-normal">Rows per page:</span>
                <div className="flex items-center space-x-[3px]">
                  <strong className="text-[#4B506D] text-[14px] leading-[20px] tracking-[0.3px] font-normal">8</strong>
                  <button>
                <img src={Dropdown} alt="Dropdown icon" width={12} height={12}/>
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-[24px]">
                <p className="text-[#9FA2B4] text-[14px] leading-[20px] tracking-[0.3px] font-normal">1-8 of 1240</p>
                <div className="flex items-center space-x-[12px]">
                  <button>
                  <img src={Left} alt="Left icon" width={24} height={24} />
                  </button>
                  <button>
                  <img src={Right} alt="Right icon" width={24} height={24} />
                  </button>
                </div>
              </div>
         </div>
     </div>
  </div> 
   )
}

export default Tickets