import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import cardImage from "../carte pesonnelle.png"
import {AiOutlineArrowRight} from "react-icons/ai"


import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { cardAccepted, setNewAdminCardData, setNewCardData } from '../controllers/card';
import { updateDevice } from '../controllers/device';
import { showError } from '../controllers/error';
import { verifyIsConnected } from '../controllers/auth';

export default function PassCardPage() {


  useEffect(()=>{
    dispatch(verifyIsConnected())
  },[])


  let socket 

  const connectedUser = useSelector(state => state.authReducer)
  const card = useSelector(state => state?.currentCard)
  const navigate = useNavigate()


  const dispatch = useDispatch()

  const [isRight, setIsRight] = useState(0);

  useEffect(() => {

    /* if(!connectedUser ) navigate("/auth") */
    console.log(card)
    if(!socket?.connected) {
      socket = io('http://192.168.1.229:5000');
      socket.on("connect",()=>{
        console.log("Connected")
        socket.emit("NEW_USER_CONNECTED","ARENA_GYM")
      })

      socket.on("RIGHT_CARD",(card)=>{
        dispatch(cardAccepted(card))
        setIsRight(1)
        setTimeout(()=>{
          navigate("/gouts")
        },3000)
      })

      socket.on("WRONG_CARD",(card)=>{
        dispatch(cardAccepted(card))
        /* navigate("/gouts") */
        setIsRight(2)
        setTimeout(()=>{
          setIsRight(0)
        },5000)
        console.log("WRONG CARD", card)
      })

      socket.on("ERROR",error=>{
        console.log(error)
        dispatch(showError(error))
      })
    }
  }, [connectedUser]);


  return (    
    <div>
      <div className="h-screen w-screen justify-around items-center bg-[url('/src/background.png')] flex flex-row">
          {
            isRight==0?<>
            <h1 className=" text-white text-8xl font-bold font-sans ">SCANNER VOTRE<br/> CARTE</h1>
            <div className='flex flex-col gap-4 mt-60'>
              <img src={cardImage} alt='' className=' rounded-2xl aspect-video w-96 border-[3px] animate-bounce '/>
              <AiOutlineArrowRight size={250} color='white' className='w-full'/>
            </div>
          </>:isRight==1?<>
            <h1 className=" text-white text-8xl font-bold font-sans high uppercase ">BONJOUR,<br/>{card?.cardName}</h1>
            <div className='flex flex-col gap-4 mt-60'>
              <img src={cardImage} alt='' className=' rounded-2xl aspect-video w-96 border-[3px] animate-bounce '/>
              <AiOutlineArrowRight size={250} color='white' className='w-full'/>
            </div>
          </>:<>
            <h1 className=" text-white text-8xl font-bold font-sans ">Sorry<br/>Accés erroné ❌<br/>Veuillez vous référer a l'accueil</h1>
            <div className='flex flex-col gap-4 mt-60'>
              <img src={cardImage} alt='' className=' rounded-2xl aspect-video w-96 border-[3px] animate-bounce '/>
              <AiOutlineArrowRight size={250} color='white' className='w-full'/>
            </div>
          </>}
      </div>
    </div>
    
  )
}
