import React from 'react'
interface Props {
    id:string;
    children:React.ReactNode;
}
export default function Section({id,children}: Props) {
  return (
    <section id={id}>
        {children}
    </section>
  )
}
