'use client'
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import NavbarLinks from './NavbarLinks'
import { navbarStore } from '@/store/ui/navbar-store'
import clsx from 'clsx'

const paths = [
    {
        url: '#',
        text: 'Home'
    },
    {
        url: '#release',
        text: 'Release'
    },
    {
        url: '#video',
        text: 'Video'
    },
    {
        url: '#tour',
        text: 'Tour'
    },
]

export const SideMenu = () => {
    const navbarMenu = navbarStore(state => state.navbarMenu)
    const closeSideMenu = navbarStore(state => state.closeNavbarMenu)
  return (
    <div>
        {/* Background */}
        {
            navbarMenu &&
            <div className='fixed z-20 top-0 right-0 h-screen w-screen opacity-30 bg-[#7660b8]'/>
        }

        {/* Blur Background */}
        {
            navbarMenu &&
            <div className='fixed z-20 top-0 right-0 h-screen w-screen backdrop-filter backdrop-blur-sm fade-in'/>
        }

        {/* Nav */}
        <nav className={
            clsx(
                'fixed z-20 top-0 right-0 w-[220px] h-screen bg-[#181818] opacity-85 shadow-2xl transform transition-all duration-500',
                {'translate-x-full': !navbarMenu}
            )
        }>
            <IoCloseOutline onClick={closeSideMenu} className='text-[#7660b8] absolute top-0 lfet-0 m-2' size={50}/>
            <div className='flex flex-col items-center  [&>a]:mt-24 [&>a]:text-[#7660b8] [&>a]:text-xl'>
                {paths.map((path) => (
                    <NavbarLinks closeSideMenu={closeSideMenu} key={path.text} url={path.url} text={path.text}/>
                ))}
            </div>
        </nav>
    </div>
  )
}
