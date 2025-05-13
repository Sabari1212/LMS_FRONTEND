import React, { useState } from 'react'
import { FaBookOpenReader } from 'react-icons/fa6'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { Deletelocalstorage } from '../localStroage';


const DashboardNav = () => {
  const [showPopup, setShowPopup] = useState(false);

const navigate=useNavigate() 

  const user = {
    name: "Sabari",
    email: "sabari@gmail.com",
    phone: "9876543210",
    password: "****",
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    Deletelocalstorage();
    navigate("/")
  };
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
          
          <button onClick={()=>setShowPopup(true)} className="hover:scale-105 duration-500 cursor-pointer" ><CgProfile size={30}/></button>
          </ul>
        </div>
      </div>
        {showPopup && (
        <div className="absolute top-16 right-4 w-72 bg-white border shadow-xl rounded-lg p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Profile Info</h2>
            <button
              onClick={() => setShowPopup(false)}
              className="text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Password:</strong> {user.password}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default DashboardNav