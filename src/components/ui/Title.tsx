import { sairaFont } from '@/config/font';
import React from 'react'

interface Props {
    title: string;
    className?: string;
}

export default function Title({title, className}: Props) {
  return (
    <div className='w-full flex justify-center items-center'>
        <h1 className={`${className} font-thin text-3xl tracking-[1rem] text-gray-600 uppercase ${sairaFont.className}`}>{title}</h1>
    </div>
  )
}
