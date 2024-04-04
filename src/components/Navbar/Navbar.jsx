import React from 'react'
import { Link } from 'react-router-dom'
import Navlink from '../Navlink/Navlink'
import {Overview, Tickets, Ideas, Contacts, Agents, Articles, Settings, Subscription} from '../../assets/Images/Icon'


import SiteLogo from '../../assets/Images/logo.svg'
function Navbar() {
  return (
    <div className="w-[25%] h-[100vh] bg-[#363740] pt-[37px] overflow-auto">
      <Link className="flex items-center space-x-[12px] pl-[32px] pb-[59px]">
        <img src={SiteLogo} alt="Site Logo" width={32} height={32}/>
        <span className="text-[#A4A6B3] text-[19px] leading-[23.84px] font-bold">Dashboard Kit</span>
      </Link>
      <ul>
        <Navlink url={"/"} title={"Overview"}>
          <Overview/>
        </Navlink>
        <Navlink url={"/tickets"} title={"Tickets"}>
          <Tickets/>
        </Navlink>
        <Navlink url={"/ideas"} title={"Ideas"}>
          <Ideas/>
        </Navlink>
        <Navlink url={"/contacts"} title={"Contacts"}>
          <Contacts/>
        </Navlink>
        <Navlink url={"/agents"} title={"Agents"}>
          <Agents/>
        </Navlink>
        <Navlink url={"/articles"} title={"Articles"}>
          <Articles/>
        </Navlink>
        <Navlink url={"/settings"} title={"Settings"}>
          <Settings/>
        </Navlink>
        <Navlink url={"/subscription"} title={"Subscription"}>
          <Subscription/>
        </Navlink>
      </ul>
    </div>
  )
}

export default Navbar