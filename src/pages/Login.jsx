import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from '../slice/userSlice'
import { useNavigate } from 'react-router-dom'
import { Loginbk, Sendotp, Register } from '../Spring'
import { StroageTockin,Stroageusername } from '../localStroage'
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [alert, setAlert] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [signup, setSignup] = useState(true)


    const [Togal, setTogal] = useState("");

    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [otp, setOtp] = useState("");
    const [role, setrole] = useState("USER");
    const [Message, setMessage] = useState("");
    const [verfidOTP, setverfidOTP] = useState("");


    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            Stroageusername(username);
             const auth = { username, password }; // Encode username:password
             setAlert(true);
            
          var respon =await Loginbk(auth);
          if(respon.data){
            toast.success("Login Successful");
            console.log(respon.data);
          
            StroageTockin(respon.data)
            setTimeout(() => {
                navigate("/userdashboard");
              }, 5000);
    
            
          }
        }catch(error){
            toast.error("Username or Password Incorrect");
            console.log(error.message);
        }
        //   console.log(auth);
    }

    // const [signupForm,setSignupForm]=useState({
    //     email:"",
    //     name:"",
    //     pw:""
    // })

    // function handleSignupForm(e){
    //     setSignupForm({...signupForm,[e.target.name]:e.target.value})

    // }
    async function RegOTPsent() {

        try {
            if(name!="" && phone!="" && username!=""&& password!=""&& confirmpassword!=""){
              if(password === confirmpassword){
                var Register = "Register";
                var respon = await Sendotp(username, Register);
                setTogal(respon)
                toast.success("OTP Sended With Email Please Check");
                setverfidOTP("")
                setMessage("")
              }else{
                toast.error("Password And ConfirmPassword Not Matchaing");
            }
            }else{
                toast.error("Please Type All Data");
            }

        } catch (error) {

            console.log(error.response.data);
            setMessage(error.response.data)
            setTogal("")
        }
    }
    async function handleSignup() {

        // dispatch(setUsers(signupForm))
        

        try {
            var regAlldata = { name,phone, username, password, otp, role };
            var respo = await Register(regAlldata);
            toast.success(respo.data);
            console.log(respo.data)
            setname("");
            setusername("")
            setpassword("")
            setOtp("")
            setTogal(false);
            setAlert(true);
            setSignup(false);






        } catch (error) {
            console.log(error.response.data);
            setverfidOTP(error.response.data);
        }

    }
    return (
        <div className='flex flex-col gap-5 justify-center h-screen items-center   '>
            <div className=' lg:w-1/3 mx-5 md:mx-0 '>
                <ul className='flex  bg-gray-200 justify-around p-2 rounded-md'>
                    {signup ?
                        <li><button onClick={() => setSignup(true)} className=' bg-white px-18 rounded-md py-1'>Signup</button></li> :
                        <li><button onClick={() => setSignup(true)} className=' px-18 py-1'>Signup</button></li>
                    }
                    {signup ?
                        <li><button onClick={() => setSignup(false)} className=' px-18 py-1'>Login</button></li> :
                        <li><button onClick={() => setSignup(false)} className='  bg-white px-18 rounded-md  py-1'>Login</button></li>
                    }
                </ul>
            </div>
            {signup ?
                <div className='flex flex-col lg:w-1/3 p-5 border-1 border-gray-300 rounded-md gap-3 mx-5 md:mx-0 '>
                    <h1 className='font-bold text-2xl'>Signup</h1>
                    {Message ?
                        <h1 className='text-center lg:text-left text-red-600 font-semibold'>{Message}</h1> :
                        <h1 className='text-center lg:text-left'>Create a new account and click signup when you're done</h1>}
                    <label className='font-bold'>Name</label>
                    <input type='text' placeholder='Enter your name' className='border-gray-300 border-1 h-[30px] p-2 rounded-md' name='name' value={name} onChange={(e) => setname(e.target.value)}></input>
                    <label className='font-bold'>Phone Namber</label>
                    <input type='number' placeholder='Enter your Phone Namber' className='border-gray-300 border-1 h-[30px] p-2 rounded-md' name='name' value={phone} onChange={(e) => setphone(e.target.value)}></input>
                    <label className='font-bold'>Email</label>
                    <input type='email' placeholder='Enter your email' className='border-gray-300 border-1 h-[30px] p-2 rounded-md' name='email' value={username} onChange={(e) => setusername(e.target.value)}></input>

                    <label className='font-bold'>Password</label>
                    <input type='password' placeholder='Enter your password' className='border-gray-300 border-1 h-[30px] p-2 rounded-md' name='pw' value={password} onChange={(e) => setpassword(e.target.value)}></input>

                    <label className='font-bold'>confirm Password</label>
                    <input type='password' placeholder='Enter your confirm password' className='border-gray-300 border-1 h-[30px] p-2 rounded-md' name='pw' value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)}></input>

                    <button className='bg-blue-800 p-1 w-max rounded-md text-white  ml-auto hover:scale-105 duration-500 cursor-pointer active:bg-blue-500    ' onClick={RegOTPsent}>Send Otp</button>
                    {Togal &&
                        <div className='flex flex-col gap-2'>
                            {verfidOTP ?
                                <h1 className='font-bold text-red-500'>{verfidOTP}</h1> :
                                <h1 className='font-bold text-green-500'>{Togal.data}</h1>}
                            <label className='font-bold'>Enter OTP</label>
                            <input type='text' placeholder='Enter your Otp' className='border-gray-300 border-1 h-[30px] p-2 rounded-md' value={otp} onChange={(e) => setOtp(e.target.value)}></input>
                            <button className='bg-blue-600 p-2 w-max rounded-md text-white ml-auto hover:scale-105 duration-500 cursor-pointer active:bg-blue-900' onClick={handleSignup}>Submit</button>
                        </div>
                    }

                </div>
                :
                <div className='flex flex-col lg:w-1/3 p-5 border-1 border-gray-300 rounded-md gap-6 mx-5 md:mx-0 '>
                    <h1 className='font-bold text-2xl'>Login</h1>
                    <h1 className='text-center lg:text-left'>Login your password here.After signup ,you'll be logged in.</h1>
                    <label className='font-bold'>Email</label>
                    <input type='email' placeholder='Enter your email' className='border-gray-300 border-1 h-[30px] p-2 rounded-md' value={username} onChange={(e) => setusername(e.target.value)}></input>
                    <label className='font-bold'>Password</label>
                    <input type='password' placeholder='Enter your password' className='border-gray-300 border-1 h-[30px] p-2 rounded-md' value={password} onChange={(e) => setpassword(e.target.value)}></input>
                    <div className='flex justify-between py-5'>
                        <button onClick={() => navigate("/forgetpw")} className='text-right text-blue-700 font-bold hover:scale-105 duration-500 cursor-pointer active:text-green-600' >Forget Password?</button>
                        <button className='bg-blue-600 p-2 w-max rounded-md text-white hover:scale-105 duration-500 cursor-pointer active:bg-blue-900  ' onClick={handleLogin}>Login</button>
                    </div>

    </div>
}
<ToastContainer position="top-center" />

{/* <div className='absolute top-0 left-auto w-full md:w-1/3 h-1/5 border-3 border-gray-300 bg-white rounded-md flex flex-col justify-around p-5 shadow-md shadow-black '> */}
    {/* <h1 className='text-xl text-blue-800 text-left'>Registered SuccessFully</h1>
    <button className='ml-auto w-max bg-blue-800 p-2 px-3 rounded-md text-white border-black border-2' onClick={()=>setAlert(false)}>Ok</button> */}
      
   


    {/* </div> */}



    </div>
  )
  
}

export default Login