import React from 'react'
import {  useNavigate } from 'react-router-dom'
import cardImage from "../carte pesonnelle.png"
import {AiOutlineArrowRight} from "react-icons/ai"
export default function PassCardPage() {
  const Navigate = useNavigate()


  const CheckCard = () => {
    Navigate("/gouts")
  }
  return (    
    <div>
      <div className="h-screen w-screen justify-around items-center bg-[url('/src/background.png')] flex flex-row">
          <h1 onClick={CheckCard} className=" text-white text-8xl font-bold font-sans ">SCANNER VOTRE<br/> CARTE</h1>
          <div className='flex flex-col gap-4 mt-60'>
            <img src={cardImage} alt='' className=' rounded-2xl aspect-video w-96 border-[3px] animate-bounce '/>
            <AiOutlineArrowRight size={250} color='white' className='w-full'/>
          </div>
      </div>
    </div>
    
  )
}
