import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Title from '../ui/Title'
import SeparateBar from '../ui/SeparateBar'

export default function Release() {
  return (
    <div className='bg-black flex flex-col justify-center items-center z-10 relative mt-screenH'>
        <div className='flex justify-center items-center mt-20'>
         <Title className='ml-4 md:ml-12' title='Release'/>
        </div>
        <div className='pt-20 md:pt-12 pb-24 flex flex-col md:flex-row gap-8 px-4'>
            <div>
                <Image src="/imgs/album-release.png" alt="Slash Album Release" width={500} height={500} className=' w-96 h-96 mx-auto md:w-full md:h-full object-cover'/>
            </div>
            <div className='flex flex-col'>
                <h2 className='uppercase font-bold italic text-xl md:text-2xl text-white'>The new blues album from Slash</h2>
                <h1 className='uppercase font-bold text-2xl md:text-4xl text-white'>Orgy of the damned</h1>
                <span className='uppercase font-bold text-md md:text-lg primary'>Available May 17th, 2024</span>
                <div className='flex flex-col items-center mt-4 gap-y-2'>
                    <Link className='uppercase font-regular text-white hover:text-[#7660b8] duration-300 text-lg rounded border-2 px-2 py-2 w-full text-center' href="https://gibsonrecords.lnk.to/ootdas">Pre-order Now</Link>
                    <Link className='uppercase font-regular text-white hover:text-[#7660b8] duration-300 text-lg rounded border-2 px-2 py-2 w-full text-center' href="https://slash.tmstor.es/product/141217">Buy Vinyl</Link>
                    <Link className='uppercase font-regular text-white hover:text-[#7660b8] duration-300 text-lg rounded border-2 px-2 py-2 w-full text-center' href="https://slash.tmstor.es/product/141214">Buy Cd</Link>
                </div>
                <div className='flex flex-col mt-8'>
                    <h2 className='uppercase font-bold text-xl text-white'>Featured tracks with:</h2>
                    <div className='grid grid-cols-2 mt-4'>
                        <p className='flex flex-col [&>span]:italic text-white'>
                            <span>Brian Johnson</span>
                            <span>Chris Stapleton</span>
                            <span>Demi Lovato</span>
                            <span>Dorothy</span>
                            <span>Paul Rodgers</span>
                            <span>Gary Clark Jr.</span>
                        </p>
                        <p className='flex flex-col [&>span]:italic text-white'>
                            <span>Billy Gibbons</span>
                            <span>Chris Robinson</span>
                            <span>Beth Hart</span>
                            <span>Tash Neal</span>
                            <span>Iggy Pop</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
       <SeparateBar/>

    </div>
  )
}
