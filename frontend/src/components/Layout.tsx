import Navbar from './Navbar.tsx'
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <div className='h-10 w-full text-center'>
          Made with 💙 by Anush | Copyright 2023
      </div>
    </div>
  )
}

export default Layout