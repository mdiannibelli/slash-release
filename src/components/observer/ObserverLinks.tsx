'use client';
import React, { Children, useEffect, useState } from 'react'
import Navbar from '../ui/Navbar';

export default function ObserverLinks({children}: {children:React.ReactNode}) {
    const [hash, setHash] = useState("");
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    const id = entry.target.id;
                    /* window.location.hash = id; */
                    setHash(`#${id}`)
                    //console.log(id)
                }       
            });
        },
        {
            threshold: 0.2,
        }
    )
    // children => lista de los elementos hijos dentro del componente ObserverLinks
    // child => será cada hijo individual al cual le vamos a realizar una iteración
    Children.forEach(children, (child:any)=> {
        // Verifica si cada sección tiene id
        const idPropExists = child?.props?.id != null;
        if (idPropExists) {
          const sectionId = `#${child.props.id}`;
          const section = document.querySelector(sectionId) as HTMLElement;
          observer.observe(section);
        }
      });

    const handleScroll = () => {
        if (window.scrollY === 0) {
            observer.disconnect();
            /* window.location.hash = '' */
            setHash("");
        }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
    };
    
},[children, hash])

  return (
    <>
    {/* El Navbar lo convertirá a use-client independientemente de si este es client  o no */}
        <Navbar hash={hash}/>
        {children}
    </>
  )
}
