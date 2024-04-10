'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface Props {
    url: string;
    text: string
}

export default function NavbarLinks({url, text}: Props) {
  //TODO Mostrar el <Link> en color 'primary' al coincidir la ruta con el #
  const path = usePathname()
  return (
    <>
        <Link id={url} className={`text-white font-md rounded-md ml-4 lg:ml-8 p-2 hover:text-[#7660b8] duration-300
        ${path === url ? 'primary' : null}`}
        href={url}>{text}</Link>
        
    </>
  )
}
