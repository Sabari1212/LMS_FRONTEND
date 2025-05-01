import React, { useState } from 'react'

const ChangePassword = () => {
      const [alert,setAlert]=useState(false)
  return (
    
    <div className='flex flex-col gap-5 justify-center h-screen items-center'>
    <div className='flex flex-col lg:w-1/3 p-5 border-3 border-gray-300 rounded-md gap-4 mx-5 md:mx-0'>
      <h1 className='font-bold text-2xl'>Change Password</h1>
      <h1 className='text-center lg:text-left'>Enter New Password and Conform New Password</h1>
      <label className='font-bold'>Password</label>
      
      <input type='email' placeholder='Enter your password' className='border-gray-300 border-1 h-[30px] p-2 rounded-md'></input>
      

  
      <label className='font-bold'>Confirm Password</label>
      <input type='text' placeholder='Enter your password again' className='border-gray-300 border-1 h-[30px] p-2 rounded-md'></input>
      <button className='bg-blue-800 p-2 w-max rounded-md text-white ml-auto hover:scale-105 duration-500 cursor-pointer active:bg-green-400' onClick={()=>setAlert(true)}>Submit</button>
      </div>
  
    
    {alert && <div className='absolute top-0 left-auto w-full md:w-1/3 h-1/5 border-3 border-gray-300 bg-white rounded-md flex flex-col justify-around p-5 shadow-md shadow-black '>
    <h1 className='text-xl text-blue-800 text-left'>Password Changed</h1>
    <button className='ml-auto w-max bg-blue-800 p-2 px-3 rounded-md text-white border-black border-2' onClick={()=>setAlert(false)}>Ok</button>


    </div>
}

    </div>
  )
}

export default ChangePassword