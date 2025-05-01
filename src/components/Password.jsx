import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sendotp, Verify_OTP } from '../Spring'
const Password = () => {
  const [cond, setcond] = useState("")
  const navigate = useNavigate()
  const [username, setusername] = useState("");
  const [Otp, setOtp] = useState("");
  const [Otpresp, setOtpresp] = useState("");
  const [respotpvar, setrespotpvar] = useState("");

  async function handleSubmit() {
    try {
      
      var respon = await Verify_OTP(Otp);
     console.log(respotpvar +" kjbdk")

      if (respon.data == "OTP verified successfully") {
        navigate("/changepw")
      } 
    }catch(error){
      console.log(error.response.data)
      setrespotpvar(error.response.data)
    }

  }
  async function Forgetsendotp() {
    try {
      var Register = "Forget";
      var respon = await Sendotp(username, Register);
      console.log(respon.data);
      setOtpresp(respon.data)
      setcond(true);
      setrespotpvar("")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex flex-col gap-5 justify-center h-screen items-center'>
      <div className='flex flex-col lg:w-1/3 p-5 border-3 border-gray-300 rounded-md gap-4 mx-5 md:mx-0'>
        <h1 className='font-bold text-2xl'>Forget Password</h1>

       {respotpvar ? <div>
        <h1 className='text-center lg:text-left font-bold text-red-500'>{respotpvar}</h1> 
        </div>:
        <div>
        {Otpresp ?
          <h1 className='text-center lg:text-left font-bold text-green-500'>{Otpresp}</h1> :
          <h1 className='text-center lg:text-left'>Enter your Email here.After that ,you'll get OTP and submit it.</h1>}
        </div>}
        

        <label className='font-bold'>Email</label>

        <input type='email' placeholder='Enter your email' className='border-gray-300 border-1 h-[30px] p-2 rounded-md' value={username} onChange={(e) => setusername(e.target.value)}></input>
        <button className='bg-blue-800 p-1 w-max rounded-md text-white ml-auto hover:scale-105 duration-500 cursor-pointer active:bg-green-600' onClick={Forgetsendotp}>Send OTP</button>
        {cond &&
          <div className='flex flex-col gap-3  '>
            <label className='font-bold'>Enter OTP</label>
            <input type='text' placeholder='Enter your Otp' className='border-gray-300 border-1 h-[30px] p-2 rounded-md' value={Otp} onChange={(e) => setOtp(e.target.value)}></input>
            <button className='bg-blue-800 p-2 w-max rounded-md text-white ml-auto hover:scale-105 duration-500 cursor-pointer active:bg-green-600' onClick={handleSubmit}>Submit</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Password