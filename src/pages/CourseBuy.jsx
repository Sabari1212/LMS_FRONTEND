import React from 'react'
import course from '../assets/course.jpg'
import { CiHeart } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 

const CourseBuy = () => {
    const users = useSelector((state) => state.userInfo.users)
   const navigate = useNavigate();  
    function handleClick(){
        navigate("/login")
    }
  return (
    <div>
<div className='bg-gray-800 lg:flex justify-evenly p-5 lg:h-[300px] '>
    <div className='justify-center flex flex-col gap-2'>
        <h1 className='font-bold text-2xl text-white'>The Complete {users[0].course_name} Developer </h1>
        <h1 className=' text-white'> how to become a {users[0].course_name} Developer and get hired! Build 12+ projects .learn Web Development,
        Machine Learning +more!</h1>
        {/* */}
        <h1 className='text-white'>created by 
          <span className='text-blue-600 border-b border-b-violet-800'>  {users[0].course_Provider}</span></h1>
        <h1 className='text-yellow-500'>Last Updated 2/2025 </h1>

    </div>
    <div className='bg-white flex flex-col gap-2 p-3 h-max border-gray-400 border-1'>
        <img className='h-40 w-72 mx-auto border-1 border-gray-600' src={`data:${users[0].course_image_name};base64,${users[0].data}`}></img>
        <h1 className='text-xl'>₹ {users[0].price}</h1>
        <div  className='flex gap-2 justify-center'>
            <button className='border-1 border-violet-700 px-10 p-1 text-violet-800 font-bold rounded-sm' onClick={handleClick}>Add to cart</button>
            <button className='border-violet-700 p-1 px-2 text-violet-800 font-bold border-1 rounded-sm'><CiHeart/></button>
        </div>
        <button className='text-white px-18 p-1 bg-violet-600 font-bold rounded-sm w-max mx-auto ' onClick={handleClick}>Buy now</button>
        <div>
            <h1 className='font-bold'>This Course includes:</h1>
            <ul className='flex flex-col gap-1'>
                <li>{users[0].deuration} hours on-demand video</li>
                <li>1 coding execrcise</li>
                <li>Access on mobile and tv</li>
                <li>Full lifetime access</li>
            </ul>
        </div>


    </div>

</div>
<div className='border-1 border-gray-400 lg:w-1/2 lg:m-10 lg:ml-44 p-3 '>
    <h1 className='text-2xl font-bold'>What you'll learn</h1>
    <div className='lg:flex justify-between p-5'>
    <ul className='flex flex-col gap-1 list-disc' >
        <li>{users[0].what_you_learn1}</li>
        <li>{users[0].what_you_learn2}</li>
        <li>{users[0].what_you_learn3}</li>
        <li>{users[0].what_you_learn4}</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sapiente?</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sapiente?</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sapiente?</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sapiente?</li>
        
    </ul >
    <ul className='flex flex-col gap-1 list-disc'>
    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sapiente?</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sapiente?</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sapiente?</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sapiente?</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sapiente?</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sapiente?</li>
    </ul>
    </div>
</div>
<div className=' lg:w-1/2 lg:m-10 lg:ml-44 p-3 '>
    <h1 className='text-2xl font-bold'>Course Content</h1>
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      
        <div className="border-b">
            <button className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center accordion">
                Introduction (4 lectures • 16min)
                <span className="icon">+</span>
            </button>
            <div className="panel hidden px-6 py-2 text-gray-600">
                <ul className="list-none space-y-2">
                    <li>Course Outline <span className="text-xs float-right">05:57</span></li>
                    <li>Join Our Online Classroom! <span className="text-xs float-right">04:01</span></li>
                    <li>Exercise: Meet Your Classmates & Instructor <span className="text-xs float-right">01:47</span></li>
                    <li>ZTM Resources <span className="text-xs float-right">04:23</span></li>
                </ul>
            </div>
        </div>

        <div className="border-b">
            <button className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center accordion">
                Python Introduction (13 lectures • 44min)
                <span className="icon">+</span>
            </button>
            <div className="panel hidden px-6 py-2 text-gray-600"></div>
        </div>

        <div className="border-b">
            <button className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center accordion">
                Python Basics (44 lectures • 3hr 37min)
                <span className="icon">+</span>
            </button>
            <div className="panel hidden px-6 py-2 text-gray-600"></div>
        </div>

        <div className="border-b">
            <button className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center accordion">
                Python Basics II (38 lectures • 3hr 30min)
                <span className="icon">+</span>
            </button>
            <div className="panel hidden px-6 py-2 text-gray-600"></div>
        </div>

        <div className="border-b">
            <button className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center accordion">
                Developer Environment (17 lectures • 1hr 7min)
                <span className="icon">+</span>
            </button>
            <div className="panel hidden px-6 py-2 text-gray-600"></div>
        </div>

        <div className="border-b">
            <button className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center accordion">
                Advanced Python: Object Oriented Programming (23 lectures • 2hr 3min)
                <span className="icon">+</span>
            </button>
            <div className="panel hidden px-6 py-2 text-gray-600"></div>
        </div>

        <div className="border-b">
            <button className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center accordion">
                Advanced Python: Functional Programming (14 lectures • 1hr 10min)
                <span className="icon">+</span>
            </button>
            <div className="panel hidden px-6 py-2 text-gray-600"></div>
        </div>

        <div className="border-b">
            <button className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center accordion">
                Advanced Python: Decorators (6 lectures • 31min)
                <span className="icon">+</span>
            </button>
            <div className="panel hidden px-6 py-2 text-gray-600"></div>
        </div>

        <div>
            <button className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center accordion">
                Advanced Python: Error Handling (5 lectures • 29min)
                <span className="icon">+</span>
            </button>
            <div className="panel hidden px-6 py-2 text-gray-600"></div>
        </div>
    </div>
    
</div>
<h1>hello</h1>

    </div>
  )
}

export default CourseBuy