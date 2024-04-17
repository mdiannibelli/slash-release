'use client';

import { navbarStore } from "@/store/ui/navbar-store";
import { IoMenuOutline } from "react-icons/io5";

export const ButtonMenu = () => {
    const openNavbarMenu = navbarStore(state => state.openNavbarMenu)
  return (
    <div>
        <IoMenuOutline onClick={openNavbarMenu} className='block md:hidden text-[#7660b8]' size={40}/>
    </div>
  )
}
