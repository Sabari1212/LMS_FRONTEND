import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import Catlodingc from '../eqwAb3kl6c.json'
import { useDispatch, useSelector } from 'react-redux';
import course from '../assets/course.jpg'
import { GetAllcourse, Getuser1 } from '../SpringCourse';
import { useNavigate } from 'react-router-dom';
import { setUsers } from '../slice/userSlice';
import { Getlocalstorage } from '../localStroage';
import ChatBot from './ChatBot';


const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [getbackdata, setgetbackdata] = useState("")

  useEffect(() => {
    getrallcour()
  }, [])

  async function getrallcour() {
    try{
       const Tocken = Getlocalstorage()
       const response = await Getuser1(Tocken)
    if (response.data) {
      navigate("/userdashboard")
    } 
    
    }catch(error){
      var getallcou = await GetAllcourse();
      setgetbackdata(getallcou.data);
      console.log(getallcou.data)
      console.log(error.message)
    }

  }

  const handleSearch = (id) => {

    for (var i = 0; i < getbackdata.length; i++) {
      if (getbackdata[i].id == id) {
        dispatch(setUsers(getbackdata[i]))
        navigate("/courseBuy")
      }

    }
  };


  return (
    <div>
      <div className="flex flex-col lg:items-center justify-center h-[350px] mt-10 bg-blue-500 text-white gap-3 px-2 ">
        <h1 className="font-bold text-3xl pt-5 text-center">Find the Best Courses for You</h1>
        <p className="mb-4 text-black-400 text-center">Discover, Learn, and Upskill with our wide range of courses</p>
        <div className="flex items-center bg-white rounded-lg px-4 py-2 ">
          <input type="text" placeholder="Search Courses" className="flex-grow  outline-none text-black  placeholder-gray-400" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-2 ">Search</button>
        </div>
        <button className="mt-4 bg-white hover:bg-gray-200 text-blue-500 px-4 py-2 rounded-lg mx-auto md:mx-0">Explore Courses</button>
      </div>

      {getbackdata ? <div className='flex flex-wrap justify-center overflow-y-auto h-[330px]'>
        {getbackdata.map((Alldata) => (
          <div onClick={() => handleSearch(Alldata.id)} className=' hover: cursor-pointer md:w-1/6 h-[250px] flex flex-col gap-1 hover:scale-105 duration-500 active:hover:scale-90 shadow-md  shadow-black  m-2 p-2 rounded-md '>

            <img className='h-32 w-72 mx-auto border-1 border-gray-600' src={`data:${Alldata.course_image_name};base64,${Alldata.data}`}></img>

            <h1 className='text-left font-bold'>The Complete {Alldata.course_name} Developer</h1>
            <h1 className='text-left text-gray-400 '>{Alldata.course_Provider}</h1>
            <h1 className='text-right font-bold'>₹ {Alldata.price}</h1>

          </div>
        ))}

        <div className=' hover: cursor-pointer md:w-1/6 h-[250px]  flex flex-col gap-1 hover:scale-105 duration-500 shadow-2xl shadow-black m-2 p-2 rounded-md '>

          <img className='h-40 w-72 mx-auto border-1 border-gray-600' src={course}></img>
          <h1 className='text-left font-bold'>Mern stack development react,node etc</h1>
          <h1 className='text-left text-gray-400 '>by tobi sabi</h1>
          <h1 className='text-right font-bold'>₹ 1,499</h1>

        </div>

      </div> :
        <div>
          <div className=' w-60 justify-self-center '>
            <Lottie animationData={Catlodingc} size={10} />
            <h1 className='text-center text-2xl font-bold'>Loading...</h1>

          </div>
        </div>}
       
    </div>
  );
};

export default Home;