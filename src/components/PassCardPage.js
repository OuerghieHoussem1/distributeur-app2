import React from 'react'
import {  useNavigate } from 'react-router-dom'
import cardImage from "../carte pesonnelle.png"
export default function PassCardPage() {
  const Navigate = useNavigate()


  const CheckCard = () => {
    Navigate("/gouts")
  }
  return (    
    <div>
      <div className="h-screen w-screen justify-around items-center bg-[url('/src/background.png')] flex flex-row">
          <h1 onClick={CheckCard} className="text-white text-8xl font-bold font-sans ">Scanner votre<br/> carte</h1>
          <img src={cardImage} alt='' className=' rounded-2xl aspect-video w-96 border-[3px] animate-bounce '/>
      </div>
    </div>
    
  )
}
