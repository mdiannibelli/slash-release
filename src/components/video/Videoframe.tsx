import React from 'react'
import Title from '../ui/Title'
import SeparateBar from '../ui/SeparateBar'

export default function VideoFrame() {
  return (
    <div className='bg-black flex flex-col justify-center items-center z-10 relative pb-12 '>
        <div className='flex mt-20'>
         <Title className='ml-12' title='Video'/>
        </div>
        <div className='my-12 md:mt-4 w-full h-full bg-black p-6'>
        <iframe className='mx-auto max-w-full max-h-full' width="930" height="610" src="https://www.youtube.com/embed/QAxBEfKeOzw?si=MDNtgy6OgvZVAD4g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
       <SeparateBar/>

    </div>
  )
}
