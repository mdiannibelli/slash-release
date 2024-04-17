import React from 'react'
interface Props {
  className?: string;
}
export default function SeparateBar({className}: Props) {
  return (
    <div className={`${className} h-[0.5px] w-[80%] xl:w-[1000px] bg-gray-800`}></div>
  )
}
