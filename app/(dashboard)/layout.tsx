import Sidebar from '@/components/navbar/Sidebar'
import Navigation from '@/components/navbar/Navigation'
import React from 'react'
import { ReactNode } from 'react'

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <main className=" relative">
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navigation />
      <section className='flex min-h-screen flex-1 flex-col px-6 pt-6 max-md:pb-14 sm:pb-14'>
                <div className='w-full'>
                {children}
                </div>
            </section>
            </div>
      </div>
         
       
        </main>
  )
}

export default RootLayout
