'use client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

export default function LogoNavbar() {
  return (
    <>
        <Link onClick={() => redirect('/')} href='/'><h1 className='sticky uppercase text-2xl lg:text-4xl font-bold primary'>Slash</h1></Link>
    </>
  )
}
