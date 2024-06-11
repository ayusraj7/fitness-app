import React from 'react'
import SideBar from '../components/core/dashboard/SideBar'
import {Outlet} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex sm:flex-row flex-col bg-neutral-800 h-[100vh-6vh] text-white '>
        <SideBar/>
        <div className="sm:h-[calc(100vh-60px)] flex-1 overflow-auto">
        <div className="mx-auto pt-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard