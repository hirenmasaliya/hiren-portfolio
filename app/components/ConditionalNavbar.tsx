'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Add routes here where the navbar should be hidden
  const hiddenRoutes = ['/biodata']; 

  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  return <Navbar />;
}