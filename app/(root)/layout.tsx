import Sidebar from '@/components/shared/Sidebar'
import MobileNav from '@/components/shared/MobileNav'
import { Mina } from 'next/font/google'
import React, { ReactNode } from 'react'
// import { Toaster } from '@/components/ui/toaster'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <main className='root'>
      <Sidebar />
      <MobileNav />

      <div className='root-container'>
        <div className='wrapper'>
        {children}
        </div>
      </div>
    </main>
  )
}

export default Layout
