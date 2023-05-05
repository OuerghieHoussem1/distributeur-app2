import React, { useEffect, useState } from "react";
import "./GoutsList.css";
import "./Succes.css";
import { useNavigate } from "react-router-dom";
import background from "../background.png";

import logo from "../Logo.png";
import WaterProgressBar from "./WaterProgressBar/WaterProgressBar";

export default function Succes() {
  const Navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 20);
    
    if (seconds === 100) {
      clearInterval(interval);
      setTimeout(() => {
        Navigate("/")
      }, 4000);
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
            <p className="mint"> Merci d'avoir Choisi Sport Water !</p>
     
            { /* <p className="mint" style={{marginLeft:"130px"}}> </p>*/}
      
      
      <p className="mint" style={{marginLeft:"130px"}}> À La Prochaiiiiiine XOXO.</p>
    </div>
    <div className="progress"><WaterProgressBar/></div>
    </div>
  );
}

{

}
