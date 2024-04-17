import Title from '../ui/Title'
import SeparateBar from '../ui/SeparateBar'
import { allTours, TourType } from '@/data/data'
import Link from 'next/link'
import { sairaFont } from '@/config/font'

export default function SlashTours() {
  const tours = allTours.tours;
  return (
    <div className='bg-black flex flex-col items-center relative pb-24'>
        <div className='flex md:mt-20'>
         <Title title='Tour'/>
        </div>
        <div className='mt-4'>
            {
              tours.map((tour:TourType) => (
                <div className='mt-4' key={tour.id}>
                  <div className='grid grid-cols-1 md:grid-cols-4'>
                    <span className={`${sairaFont.className} text-bold text-xl md:text-3xl text-white`}>{tour.date}</span>
                    <span className={`${sairaFont.className} text-bold text-3xl col-span-2 text-white`}>{tour.title}</span>
                    <Link className={`${sairaFont.className} text-bold text-2xl border-2 py-1 px-2 text-center border-[#7660b8] hover:text-[#7660b8] duration-300 text-white`} href={tour.url}>{tour.button}</Link>
                  </div>
                  <SeparateBar className='my-6'/>
                </div>
              ))
            }
        </div>
        <div>
          <Link href='https://www.slashonline.com/homepage/'><h2 className='uppercase font-bold text-white md:py-12 md:text-2xl mt-12 hover:text-[#7660b8] duration-300'>Enter slash website</h2></Link>
        </div>

    </div>
  )
}
