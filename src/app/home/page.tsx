import Release from '@/components/release/Release'
import Video from '@/components/Video'
import React from 'react'

export default function HomePage() {
  return (
    <main className='h-full w-full'>
        <Video/>
        <Release/>
    </main>
  )
}

