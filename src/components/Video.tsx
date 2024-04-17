import React from 'react'

export default function Video() {
  return (
    <div className='h-[650px] overflow-hidden w-auto xl:h-full fixed right-0 left-0 top-[100px] -z-10'>
      <video
      className='opacity-[0.6] -z-1 w-full h-full object-cover'
      width='100%' 
      loop
      muted
      autoPlay
      playsInline
      >
          <source src='https://res.cloudinary.com/dvvtskcux/video/upload/v1712607326/usjygpoelxvphqmfswto.mp4' type='video/mp4'/>
      </video>
    </div>
  )
}
