import React from 'react'
import {  useNavigate } from 'react-router-dom'

export default function PassCardPage() {
  const Navigate = useNavigate()


  const CheckCard = () => {
    Navigate("/gouts")
  }
  return (
    <div className='h-screen flex justify-center items-center'>
        <p className='cursor-pointer' onClick={CheckCard}>Please pass your card in front of the scanner</p>
    </div>
  )
}
