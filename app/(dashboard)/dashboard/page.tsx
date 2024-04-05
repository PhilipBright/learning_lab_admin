import Analysis from '@/components/blocks/Analysis'
import RecentEnroll from '@/components/blocks/RecentEnroll'
import Students from '@/components/blocks/Students'
import Subscribers from '@/components/blocks/Subscribers'
import Teacher from '@/components/blocks/Teacher'
import TotalRevenue from '@/components/blocks/TotalRevenue'
import React from 'react'
import BreadCrumb from '@/components/blocks/BreadCrumb'

const Dashboard = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 ">
        <h1 className=' text-4xl font-bold text-black'>Dashboard</h1>
          <BreadCrumb source='Admin' destination='Dashboard'/>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <TotalRevenue/>
            <Subscribers/>
            <Teacher/>
            <Students/>
             <div className='lg:w-[71rem] grid grid-cols-1 gap-4 lg:grid-cols-7'>
                <Analysis/>
                <RecentEnroll/>
            </div>
        </div>
    </main>
  )
}

export default Dashboard
