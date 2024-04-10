import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Release() {
  return (
    <div className='bg-black flex flex-col justify-center items-center z-10 relative mt-screenH'>
        <div className='py-24 flex gap-x-8'>
            <div>
                <Image src="/imgs/album-release.png" alt="Slash Album Release" width={500} height={500} className='w-full h-full object-cover'/>
            </div>
            <div className='flex flex-col'>
                <h2 className='uppercase font-bold italic text-2xl'>The new blues album from Slash</h2>
                <h1 className='uppercase font-bold text-4xl'>Orgy of the damned</h1>
                <span className='uppercase font-bold text-lg primary'>Available May 17th, 2024</span>
                <div className='flex flex-col items-center mt-4 gap-y-2'>
                    <Link className='uppercase font-regular hover:text-[#7660b8] duration-300 text-lg rounded border-2 px-2 py-2 w-full text-center' href="https://gibsonrecords.lnk.to/ootdas">Pre-order Now</Link>
                    <Link className='uppercase font-regular hover:text-[#7660b8] duration-300 text-lg rounded border-2 px-2 py-2 w-full text-center' href="https://slash.tmstor.es/product/141217">Buy Vinyl</Link>
                    <Link className='uppercase font-regular hover:text-[#7660b8] duration-300 text-lg rounded border-2 px-2 py-2 w-full text-center' href="https://slash.tmstor.es/product/141214">Buy Cd</Link>
                </div>
            </div>
        </div>

    </div>
  )
}
