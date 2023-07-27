
import React, { useEffect } from 'react'
import homePage from "./homepage.png"
import gifHomepage from "../gifHomepage.gif"
import "../App.css"
import {  useNavigate } from 'react-router-dom'

import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux'
import { cardAccepted } from '../controllers/card'
export default function HomePage() {

  let socket 

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const connectedUser = useSelector(state => state.authReducer)

  useEffect(() => {

    /* if(!connectedUser ) navigate("/auth") */
    if(!socket?.connected) {
      socket = io('http://192.168.1.42:5000');
      socket.on("connect",()=>{
        console.log("Connected")
        socket.emit("NEW_USER_CONNECTED","ARENA_GYM")
      })

      socket.on("RIGHT_CARD",(card)=>{
        dispatch(cardAccepted(card))
        navigate("/gouts")
      })

      socket.on("WRONG_CARD",(card)=>{
        dispatch(cardAccepted(card))
        /* navigate("/gouts") */
        console.log("WRONG CARD", card)
      })

      socket.on("ERROR",error=>{
        console.log(error)
      })
    }
  }, [connectedUser]);


const style = {
  width : "100%",
  height: "100vh"
  
  
}
const Navigate = useNavigate()
function goToGout(){
  Navigate("/passCard")
}

  return (
    <div className='App-header' style={{margin : 0,padding:0}}>
      <img src = {gifHomepage} alt = "homePage" style={style} onClick={goToGout}/>  
    </div>
  )
}
