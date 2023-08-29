import Navbar from './Navbar.tsx'
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    backgroundColor: string; // Define the prop for background color
  }
const Layout = ({ children, backgroundColor }: LayoutProps) => {
  return (
    <div style={{backgroundColor:backgroundColor}} className='outer-div min-h-screen'>
      <Navbar />
      {children}
      {/* <div className='h-10 w-full text-center absolute bottom-0' style={{backgroundColor:backgroundColor}}>
          Made with 💙 by Anush | Copyright 2023
      </div> */}
    </div>
  )
}

export default Layout