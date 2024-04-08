'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props {
    url: string;
    text: string
}

export default function NavbarLinks({url, text}: Props) {
    const path = usePathname()
  return (
    <>
        <Link className={`text-white font-md rounded-md ml-4 lg:ml-8 p-2
        ${path === url ? 'primary' : null}`}
        href={url}>{text}</Link>
    </>
  )
}
