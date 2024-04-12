import { sairaFont } from '@/config/font';
import React from 'react'

interface Props {
    title: string;
}

export default function Title({title}: Props) {
  return (
    <div className='w-full'>
        <h1 className={`font-thin text-3xl tracking-[1rem] text-gray-600 uppercase text-center mx-auto  ${sairaFont.className}`}>{title}</h1>
    </div>
  )
}
