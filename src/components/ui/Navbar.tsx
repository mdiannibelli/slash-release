import React from 'react'
import Link from 'next/link'
import {IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoLogoTwitter, IoLogoYoutube} from 'react-icons/io5'
import NavbarLinks from './NavbarLinks'
import LogoNavbar from './LogoNavbar'

const paths = [
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
    {
        url: '#merch',
        text: 'Merch'
    },
]

interface Props {
    hash: string;
}

export default function Navbar({hash}: Props) {
  return (
    <nav className='bg-black flex justify-between px-8 items-center py-4 w-full fixed top-0 z-20'>
        <div className='flex relative items-center'>
            <LogoNavbar/>
        </div>
        <div className='hidden md:flex items-center lg:flex-1 justify-around w-full'>
            <div className='flex-1 flex justify-center'>
           {paths.map((path) => (
            <NavbarLinks key={path.text} hash={hash} url={path.url} text={path.text}/>
           ))}
            </div>
            {<div className='hidden lg:flex gap-2'>
                <Link className='hover:text-[#7660b8] text-white duration-300' href='https://www.instagram.com/slash/'><IoLogoInstagram className='w-6 h-6'/></Link>
                <Link className='hover:text-[#7660b8] text-white duration-300' href='https://www.tiktok.com/@slash'><IoLogoTiktok className='w-6 h-6'/></Link>
                <Link className='hover:text-[#7660b8] text-white duration-300' href='https://www.youtube.com/channel/UC6WCQjfkWnDWvFfw_YDrq5g'><IoLogoYoutube className='w-6 h-6'/></Link>
                <Link className='hover:text-[#7660b8] text-white duration-300' href='https://www.facebook.com/slash/'><IoLogoFacebook className='w-6 h-6'/></Link>
                <Link className='hover:text-[#7660b8] text-white duration-300' href='https://twitter.com/Slash'><IoLogoTwitter className='w-6 h-6'/></Link>
            </div>}
        </div>
    </nav>
  )
}
