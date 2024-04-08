import React from 'react'

export default function Video() {
  return (
    <video
    className='opacity-[0.3]'
    width='100%' 
    loop
    muted
    autoPlay
    playsInline
    >
        <source src='https://res.cloudinary.com/dvvtskcux/video/upload/v1712607326/usjygpoelxvphqmfswto.mp4' type='video/mp4'/>
    </video>
  )
}
