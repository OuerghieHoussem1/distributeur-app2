import React, {useState, useEffect } from 'react'
import {AiOutlineMail,AiOutlineEyeInvisible,} from "react-icons/ai"
import {RiLockPasswordLine} from "react-icons/ri"
import {MdOutlineVisibility} from "react-icons/md"

import { useDispatch, useSelector } from 'react-redux'
import { loginController, signupController } from '../controllers/auth'
import { useNavigate } from "react-router-dom";

import { hideError } from '../controllers/error';
import { verifyIsConnected } from '../controllers/auth';



export default function Auth() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const connectedUser = useSelector(state => state.authReducer)


  useEffect(() => {
    if(connectedUser) navigate("/dashboard")
  }, [connectedUser]);
  
  

  const onSubmit = (e) => {
    e.preventDefault()
    if(isLogin){
      dispatch(loginController(loginData))
      return
    }
    if(!isLogin){
      dispatch(signupController(signupData))
      return
    }
  }

  const updateData = (e) => {
    if(isLogin){
      setloginData({...loginData,[e.target.name]:e.target.value})
      return
    }
    if(!isLogin){
      setSignupData({...signupData,[e.target.name]:e.target.value})
      return
    }
  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginData, setloginData] = useState({email:"", password:""});
  const [signupData, setSignupData] = useState({email:"", password:"", name:"", phoneNumber:""});
  const [isLogin, setIsLogin] = useState(true);

  const error = useSelector(state => state.errorReducer)

  useEffect(() => {
    dispatch(verifyIsConnected())
  }, []);

  useEffect(() => {
    console.log(error)
    dispatch(hideError())
  }, [error]);

 
  return (

    <div className='h-screen flex flex-row bg-[#05253a] p-10'>
      {error&&<div className='z-10 absolute bg-opacity-60 bg-white bottom-5 right-5 rounded-full p-3 w-1/3'>
        {error.message}
      </div>}
      <div className='bg-sky-900 p-5 rounded-xl lg:w-1/3 sm:w-full'>
          <div className='flex grow'>
            <button className='text-white text-xl mt-6 pr-4 cursor-pointer border-r-2' disabled={isLogin} onClick={()=>setIsLogin(!isLogin)} style={{color:isLogin?"white":"lightgray", borderColor:isLogin?"white":"lightgray"}}>Login</button>
            <button className='text-white text-xl mt-6 pl-4 cursor-pointer' disabled={!isLogin} onClick={()=>setIsLogin(!isLogin)} style={{color:!isLogin?"white":"lightgray"}}>Sign up</button>
          </div>
          <p className='text-white text-4xl mt-6'>Welcome back</p>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col duration-500">
            <div style={{transition:"max-height 1s ease-in-out", overflow:"hidden", maxHeight:isLogin?0:300}} className='mb-6'>
              <div className='flex flex-row gap-4 border-2 border-gray-500 border-opacity-25 p-2 rounded-lg items-center'>
                <AiOutlineMail color='white' size={30} />
                <input onChange={updateData} value={signupData.name} name="name"  placeholder='Name' className='w-full text-white bg-transparent border-none placeholder:text-white'/>
              </div>
              <div className='mt-6 flex flex-row gap-4 border-2 border-gray-500 border-opacity-25 p-2 rounded-lg items-center'>
                <RiLockPasswordLine color='white' size={30} />
                <input type="text" onChange={updateData} value={signupData.phoneNumber} name="phoneNumber"  placeholder='Phone number' className='w-full text-white bg-transparent border-none placeholder:text-white'/>
              </div>
            </div>
            <div className='flex flex-row gap-4 border-2 border-gray-500 border-opacity-25 p-2 rounded-lg items-center'>
              <AiOutlineMail color='white' size={30} />
              <input onChange={updateData} value={isLogin?loginData.email:signupData.email} name="email"  placeholder='Email' className='w-full text-white bg-transparent border-none placeholder:text-white'/>
            </div>
            <div className='mt-6 flex flex-row gap-4 border-2 border-gray-500 border-opacity-25 p-2 rounded-lg items-center'>
              <RiLockPasswordLine color='white' size={30} />
              <input type={isPasswordVisible?"text":"password"} onChange={updateData} value={isLogin?loginData.password:signupData.password} name="password"  placeholder='Password' className='w-full text-white bg-transparent border-none placeholder:text-white'/>
              {isPasswordVisible?<AiOutlineEyeInvisible onClick={()=>setIsPasswordVisible(!isPasswordVisible)} className="cursor-pointer " color='white' size={30}/>:<MdOutlineVisibility onClick={()=>setIsPasswordVisible(!isPasswordVisible)} className="cursor-pointer " color='white' size={30}/>}
            </div>
            
            <button className='bg-[#45b9ff] px-7 py-2 rounded-full mt-6 w-fit self-end text-white text-2xl hover:text-3xl duration-100'>{isLogin?"Login":"Sign up"}</button>
          </form>
      </div>
      <div className='relative grow flex justify-center items-center lg:block sm:hidden'>
        <p>OAEGFOUEG</p>
      </div>
    </div>
  )
}