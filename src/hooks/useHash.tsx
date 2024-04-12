'use client';
import { useEffect, useState } from "react";

export const useHash = () => {
    const [hash, setHash] = useState(() => {
      if (typeof window !== 'undefined') {
      return window.location.hash
      }}
    );
    useEffect(() => {
      const onHashChange = () => setHash(window.location.hash);
  
      window.addEventListener('hashchange', onHashChange);
      // Unmount component
      return () => window.removeEventListener('hashchange', onHashChange)
    }, [])
    return hash
  }