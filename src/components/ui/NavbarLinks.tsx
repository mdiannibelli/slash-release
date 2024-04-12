'use client'
import { useHash } from '@/hooks/useHash';

interface Props {
    url: string;
    text: string;
    hash: string;
}



export default function NavbarLinks({url, text, hash}: Props) {
  /* const hash = useHash() */
  return (
    <>
        <a  className={`text-white font-md rounded-md ml-4 lg:ml-8 p-2 hover:text-[#7660b8] duration-300
        ${hash === url ? 'primary' : null}`}
        href={url}>{text}</a>
        
    </>
  )
}
