import React, { useEffect, useState } from 'react'
import { FaBookOpenReader } from 'react-icons/fa6'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Getuser1, Getuser2, GetAllcourse, Getpayonedata } from '../SpringCourse';
// import { GetAllcourse, Getuser1 } from '../SpringCourse';

import { Getlocalstorage, Getlocalstorageusername } from '../localStroage';
import { useNavigate } from 'react-router-dom'
import Logo1 from "../assets/Logo1.png"
import Logo2 from "../assets/about.png"
import Logo3 from "../assets/hero.png"
import course from '../assets/course.jpg'
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import { setUsers } from '../slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {

  const dispatch = useDispatch()


  const [change, setChange] = useState(3)
  const navigate = useNavigate();
  var [AllUserData, setAllUserData] = useState("");
  var [backdata, setgetbackdata] = useState([]);
  useEffect(() => {
    GetUserdata()
  }, [])
  async function GetUserdata() {
    try {
      const Tocken = Getlocalstorage()
      const response = await Getuser1(Tocken)
      const response2 = await Getuser2(Tocken)

      var getallcou = await GetAllcourse();

      setgetbackdata(getallcou.data);
      setAllUserData(response.data)
      // setAllUserData2(response2.data)


    } catch (error) {
      navigate("/")
      console.error("Error accessing protected route:", error.data);
    }
  }

  const handleSearch = async (id) => {

    // for (var i = 0; i <backdata.length; i++) {
    //   if (backdata[i].id == id) {
    var email = Getlocalstorageusername();
    var tocken = Getlocalstorage();
    var towdata = { id, email, tocken }
    var resppay = await Getpayonedata(towdata)

    dispatch(setUsers(id))
    console.log(resppay)
    if(resppay.data.orderStatus === "PAYMENT_COMPLETED"){
      navigate("/course")

    }else{
      navigate("/peymentpage")
      // dispatch(setUsers(id))
      // console.log(id)
    }

    //   }

    // }
    console.log(id)
  }
  return (
    <div>


      <div className='flex gap-3 items-center mt-6 ml-5 lg:ml-20'>
        <div>
          <CgProfile size={40} />

        </div>
        <div className='flex flex-col gap-1'>

          <h1 className='font-bold text-xl'>{AllUserData}</h1>

          <button className='text-violet-800 border-b border-b-violet-800'>Add occupation and Interests</button>

        </div>
      </div>
      {change == 1 && <div className='bg-green-300 lg:w-[80%] lg:flex lg:h-[40vh] justify-around items-center mx-auto mt-10 relative'>
        <div className='lg:w-[30%] bg-white p-3 m-2 shadow-xl '>
          <h1 className='font-bold text-xl'>Slow and Steady</h1>
          <h1>Try learning just 5-10 minutes a day. <span className='text-blue-500 border-b-2 border-b-violet-500'>Continue your course </span>
            and reach your peak potential</h1>

          <button className='absolute left-0 m-2 top-[50%] p-2 rounded-sm hover:scale-110 duration-300' onClick={() => setChange(3)}><SlArrowLeftCircle size={30} /></button>
          <button className='absolute right-0 m-2 top-[50%] p-2 rounded-sm hover:scale-110 duration-300' onClick={() => setChange(2)}><SlArrowRightCircle size={30} /></button>


        </div>

        <div>
          <img className='h-52 w-52 mx-auto lg:mx-0' src={Logo1}></img>

        </div>


      </div>
      }

      {change == 2 && <div className='bg-gray-400 lg:w-[80%] lg:flex lg:h-[40vh] justify-around items-center mx-auto mt-10 relative'>
        <div className='lg:w-[30%] bg-white p-3 m-2 shadow-xl '>
          <h1 className='font-bold text-xl'>Slow and Steady 2</h1>
          <h1>Try learning just 5-10 minutes a day. <span className='text-blue-500 border-b-2 border-b-violet-500'>Continue your course </span>
            and reach your peak potential</h1>

          <button className='absolute left-0 m-2 top-[50%] p-2 rounded-sm hover:scale-110 duration-300' onClick={() => setChange(1)}><SlArrowLeftCircle size={30} /></button>
          <button className='absolute right-0 m-2 top-[50%] p-2 rounded-sm hover:scale-110 duration-300' onClick={() => setChange(3)}><SlArrowRightCircle size={30} /></button>


        </div>

        <div>
          <img className='h-72 w-80 mx-auto lg:mx-0' src={Logo2}></img>

        </div>


      </div>
      }

      {change == 3 && <div className='bg-violet-600 lg:w-[80%] lg:flex lg:h-[40vh] justify-around items-center mx-auto mt-10 relative'>
        <div className='lg:w-[30%] bg-white p-3 m-2 shadow-xl '>
          <h1 className='font-bold text-xl'>Slow and Steady 3</h1>
          <h1>Try learning just 5-10 minutes a day. <span className='text-blue-500 border-b-2 border-b-violet-500'>Continue your course </span>
            and reach your peak potential</h1>

          <button className='absolute left-0 m-2 top-[50%] p-2 rounded-sm hover:scale-110 duration-300' onClick={() => setChange(2)}><SlArrowLeftCircle size={30} /></button>
          <button className='absolute right-0 m-2 top-[50%] p-2 rounded-sm hover:scale-110 duration-300' onClick={() => setChange(1)}><SlArrowRightCircle size={30} /></button>


        </div>

        <div>
          <img className='h-64 w-64 mx-auto lg:mx-0' src={Logo3}></img>

        </div>


      </div>
      }


      <div className='flex flex-wrap justify-center overflow-y-auto h-[330px] mt-10'>

        {backdata.map((Alldata) => (
          <div onClick={() => handleSearch(Alldata.id)} className=' hover: cursor-pointer md:w-1/6 h-[250px]  flex flex-col gap-1 hover:scale-105 duration-500 m-2 p-2 rounded-md active:hover:scale-90 shadow-md shadow-black '>


            <img className='h-32 w-72 mx-auto border-1 border-gray-600' src={`data:${Alldata.course_image_name};base64,${Alldata.data}`}></img>

            <h1 className='text-left font-bold'>The Complete {Alldata.course_name} Developer</h1>
            <h1 className='text-left text-gray-400 '>{Alldata.course_Provider}</h1>
            <h1 className='text-right font-bold'>₹ {Alldata.price}</h1>


          </div>
        ))}

        <div className=' hover: cursor-pointer md:w-1/6 h-[250px]  flex flex-col gap-1 hover:scale-105 duration-500 shadow-md shadow-black m-2 p-2 rounded-md '>

          <img className='h-40 w-72 mx-auto border-1 border-gray-600' src={course}></img>
          <h1 className='text-left font-bold'>Mern stack development react,node etc</h1>
          <h1 className='text-left text-gray-400 '>by tobi sabi</h1>
          <h1 className='text-right font-bold'>₹ 1,499</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard