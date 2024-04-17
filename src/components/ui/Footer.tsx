import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCalendarClearOutline, IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5'

export const Footer = () => {
  return (
    <footer className='bg-slash w-full h-full object-cover py-16 md:py-48'>
        <div className='flex flex-col items-center justify-center'>
            <div>
                <Image className='w-[220px] md:w-auto' width={320} height={250} src="https://ootd.slashonline.com/dist/img/logo/logo-w.png" alt="Slash" />
            </div>
            <div className='flex gap-x-2 mt-4 md:mt-8 items-center'>
                <Link className='hover:text-[#7660b8] text-white duration-300' href='https://www.slashonline.com/tour/'><IoCalendarClearOutline className='w-4 h-4 md:w-6 md:h-6'/></Link>
                <Link className='hover:text-[#7660b8] text-white duration-300' href='https://www.instagram.com/slash/'><IoLogoInstagram className='w-4 h-4 md:w-6 md:h-6'/></Link>
                <Link className='hover:text-[#7660b8] text-white duration-300' href='https://www.tiktok.com/@slash'><IoLogoTiktok className='w-4 h-4 md:w-6 md:h-6'/></Link>
                <Link className='hover:text-[#7660b8] text-white duration-300' href='https://www.youtube.com/channel/UC6WCQjfkWnDWvFfw_YDrq5g'><IoLogoYoutube className='w-4 h-4 md:w-6 md:h-6'/></Link>
                <Link className='hover:text-[#7660b8] text-white duration-300' href='https://www.facebook.com/slash/'><IoLogoFacebook className='w-4 h-4 md:w-6 md:h-6'/></Link>
                <Link className='hover:text-[#7660b8] text-white duration-300' href='https://twitter.com/Slash'><IoLogoTwitter className='w-4 h-4 md:w-6 md:h-6'/></Link>
            </div>
        </div>
    </footer>
  )
}
