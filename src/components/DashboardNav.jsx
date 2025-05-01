import React from 'react'
import { FaBookOpenReader } from 'react-icons/fa6'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const DashboardNav = () => {
  return (
    <div>

<div className='flex p-3 lg:p-5 lg:mx-5 lg:gap-5 justify-between border-b border-gray-400'>
       <div className='flex gap-3'>
                  <h1 className='text-3xl font-bold'><FaBookOpenReader/></h1>
                  <h1 className='text-2xl font-bold'>Learning</h1>
      
      
              </div>
        <div className='w-1/2'>
          <input type='text' className='border-1 border-gray-400 w-[100%] outline-none h-10 rounded-xl px-2'placeholder='Search for anything'></input>
        </div>
        <div className='p-1'>
          <ul className='flex gap-3'>
          <a href='/userdashboard'> <li className="hover:scale-105 duration-500">User Dashboard</li></a>
          <a href='/Certificates'> <li className="hover:scale-105 duration-500">Certificates</li></a>
            <li>My Learning</li>
            <li className='text-2xl'>  <CiHeart /></li>
            <li className='text-2xl'><IoCartOutline/></li>
            <li className='text-2xl'><IoMdNotificationsOutline/></li>
            <li className='text-2xl'><CgProfile/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav