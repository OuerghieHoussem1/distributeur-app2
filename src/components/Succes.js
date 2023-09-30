import React, { useEffect, useState } from "react";
import "./GoutsList.css";
import "./Succes.css";
import { useNavigate } from "react-router-dom";
import background from "../background.png";

import logo from "../Logo.png";
import WaterProgressBar from "./WaterProgressBar/WaterProgressBar";


import { useDispatch, useSelector } from "react-redux";
import { lessBeverages } from "../controllers/card";
import { lessDrinks } from "../controllers/drink";
export default function Succes() {
  const Navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);

  const dispatch = useDispatch()

  const card = useSelector(state => state?.currentCard)
  const drink = useSelector(state => state?.currentDrink)

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 20);
    
    if (seconds === 100) {
      clearInterval(interval);
      setTimeout(() => {
      console.log(card)
      dispatch(lessBeverages(card))
      console.log(drink)
      dispatch(lessDrinks(drink))
        Navigate("/")
      }, 14000);
    }

    return () => clearInterval(interval);
  }, [seconds]);

  const ContainerStyle = {
    backgroundImage: `url(${background})`,
    textAlign:"center"
  };

  return (
    <div style={ContainerStyle} className="App-header ">
      <img className="logo" src={logo} />
    <div> 
      <div className="flex flex-col justify-center items-center gap-7 mt-24">
            <p className="uppercase font-bold text-4xl text-[#eedc19]"> Merci d'avoir Choisi Sport Water !</p>
            <p className="mt-6 uppercase font-bold text-4xl text-[#eedc19]">Il vous reste {card.beverages} boissons !</p>
            <p className="mt-6 font-bold text-4xl text-[#eedc19]"> XOXO.</p>
      </div>
            { /* <p className="mint" style={{marginLeft:"130px"}}> </p>*/}
      
      
    </div>
    {/* <div className="progress"><WaterProgressBar/></div> */}
    </div>
  );
}

{

}
