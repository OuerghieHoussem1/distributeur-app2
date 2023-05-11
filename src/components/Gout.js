import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./gout.css"
import IntesityLevel from './IntesityLevel';
import { useDispatch } from 'react-redux';
import { drinkChosen } from '../controllers/drink';


export default function Gout({className ,saveur,durationEau,img, drink}) {

  const dispatch = useDispatch()

  const Navigate = useNavigate()
  
  const stopProgram = () => {
    const url = 'http://localhost:9000/stopAlert';

    fetch(url)
        .then((response => {
            // setIsLoading(false);
            // setCurrentSaveur(null);
        }))
        .catch((error) => {
            // setIsLoading(false);
            // setCurrentSaveur(null);
        })
}


  function chooseIntensity (){
    const GoutParameters = {
      className:className,
      saveur:saveur,
      durationEau:durationEau
}  
  sessionStorage.setItem('GoutParameters',JSON.stringify(GoutParameters));
  dispatch(drinkChosen(drink))
 Navigate("/IntesityLevels")
 

  }
  return (
    <div className={className}>
      <img  alt={className} src={img} style={{width : "75%"}}  onClick={drink?.drinkQuantity>0?chooseIntensity:()=>console.log("NOTHING TO DO")}/> 
    </div>
  )
}
