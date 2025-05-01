import React, { useState } from 'react'
import { FaBookOpenReader } from "react-icons/fa6";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { WiMoonAltWaningCrescent1 } from "react-icons/wi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [theme,setTheme]=useState(true)
  const navigate=useNavigate()

  function handleClick(){
    navigate('/login')

  }
  return (
    <div className='flex justify-between md:justify-between mx-5 lg:mx-20 py-3  gap-5 md:gap-0'>
        <div className='flex gap-3'>
            <h1 className='text-3xl font-bold'><FaBookOpenReader/></h1>
            <h1 className='text-2xl font-bold'>Learning</h1>


        </div>
        <div>
            <ul className='flex gap-2 lg:gap-5'>
                <li><button className='border-1 border-gray-300 p-1 bg-gray-800 text-white rounded-md hover:scale-110 cursor-pointer duration-500' onClick={handleClick}>Signup</button></li>
                <li><button className=' hidden lg:block border-1 border-gray-300 p-1   rounded-md hover:scale-110 cursor-pointer duration-500' onClick={handleClick}>Login</button></li>
                

 {theme ?<li > <button onClick={()=>setTheme(!theme)} className='border-1 border-gray-300 p-1 text-2xl  rounded-md hover:scale-110 cursor-pointer duration-500'><WiMoonAltFirstQuarter/></button></li>:
<li><button onClick={()=>setTheme(!theme)} className='border-1 border-gray-300 p-1 text-2xl  rounded-md hover:scale-110 cursor-pointer duration-500'><WiMoonAltWaningCrescent1/></button></li>
}

            </ul>

        </div>


    </div>
  )
}

export default Navbar