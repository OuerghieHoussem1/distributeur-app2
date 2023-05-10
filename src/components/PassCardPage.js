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
    if(connectedUser && !socket?.connected) {
      socket = io('http://localhost:5000');
      socket.on("connect",()=>{
        console.log("Connected")
        socket.emit("NEW_USER_CONNECTED",connectedUser._id)
      })


      socket.on("GET_NEW_CARD_DATA",(newCardData)=>{
        dispatch(setNewCardData(newCardData.uuid,newCardData.deviceId))
      })

      socket.on("RIGHT_CARD",(card)=>{
        dispatch(cardAccepted(card))
        setIsRight(1)
        setTimeout(()=>{
          navigate("/gouts")
        },5000)
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


      socket.on("DOOR_CLOSED",(userId)=>{
        dispatch(updateDevice(userId))
      })
      

      socket.on("DOOR_OPENED",(userId)=>{
        dispatch(updateDevice(userId))
      })


      socket.on("SEND_READ_DATA",({deviceId,readData,uuid,cardType})=>{
        console.log(deviceId,readData,uuid,cardType)
        dispatch(setNewAdminCardData(deviceId,readData,uuid,cardType))
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
            <h1 className=" text-white text-8xl font-bold font-sans ">Salut<br/>{card?.cardName}</h1>
            <div className='flex flex-col gap-4 mt-60'>
              <img src={cardImage} alt='' className=' rounded-2xl aspect-video w-96 border-[3px] animate-bounce '/>
              <AiOutlineArrowRight size={250} color='white' className='w-full'/>
            </div>
          </>:<>
            <h1 className=" text-white text-8xl font-bold font-sans ">Sorry<br/>Accés erroné ❌<br/>Veuillez vous référé a l'accueil</h1>
            <div className='flex flex-col gap-4 mt-60'>
              <img src={cardImage} alt='' className=' rounded-2xl aspect-video w-96 border-[3px] animate-bounce '/>
              <AiOutlineArrowRight size={250} color='white' className='w-full'/>
            </div>
          </>}
      </div>
    </div>
    
  )
}
