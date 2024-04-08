import Navbar from '@/components/ui/Navbar'
import React from 'react'

export default function MainLayout({children}: {children:React.ReactNode}) {
  return (
    <main className='min-h-screen bg-black'>
        <Navbar/>
        {children}
    </main>
  )
}
