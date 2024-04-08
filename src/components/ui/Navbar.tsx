import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoLogoTwitter, IoLogoYoutube} from 'react-icons/io5'
import NavbarLinks from './NavbarLinks'

const paths = [
    {
        url: '/home',
        text: 'Home'
    },
    {
        url: '/release',
        text: 'Release'
    },
    {
        url: '/video',
        text: 'Video'
    },
    {
        url: '/tour',
        text: 'Tour'
    },
    {
        url: '/merch',
        text: 'Merch'
    },
]

export default function Navbar() {
  return (
    <nav className='bg-black flex justify-between px-8 items-center py-4 w-full'>
        <div className='flex relative items-center'>
            <Link href='/home'><h1 className='sticky uppercase text-2xl lg:text-4xl font-bold primary'>Slash</h1></Link>
        </div>
        <div className='hidden sm:flex items-center flex-1 justify-around w-auto'>
            <div className='flex-1 flex justify-center'>
           {paths.map((path) => (
            <NavbarLinks url={path.url} text={path.text}/>
           ))}
            </div>
            <div className='flex gap-2'>
            <Link className='hover:text-[#7660b8] duration-300' href='https://www.instagram.com/slash/'><IoLogoInstagram className='w-6 h-6'/></Link>
                <Link className='hover:text-[#7660b8] duration-300' href='https://www.tiktok.com/@slash'><IoLogoTiktok className='w-6 h-6'/></Link>
                <Link className='hover:text-[#7660b8] duration-300' href='https://www.youtube.com/channel/UC6WCQjfkWnDWvFfw_YDrq5g'><IoLogoYoutube className='w-6 h-6'/></Link>
                <Link className='hover:text-[#7660b8] duration-300' href='https://www.facebook.com/slash/'><IoLogoFacebook className='w-6 h-6'/></Link>
                <Link className='hover:text-[#7660b8] duration-300' href='https://twitter.com/Slash'><IoLogoTwitter className='w-6 h-6'/></Link>
            </div>
        </div>
    </nav>
  )
}
