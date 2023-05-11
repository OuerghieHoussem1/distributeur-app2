import React, {useEffect} from "react";
import Gout from "./Gout";
import "./GoutsList.css";
import bgImage from "../background.png";
//Images
import pasteque from "../12.png";
import Cassis from "../1.png";
import FruitDelapassion from "../123.png";
import FiguedeBarbarie from "../1234.png";
import CitronVert from "../12345.png";
import { useDispatch, useSelector } from "react-redux";
import { loadDrinks } from "../controllers/drink";
export default function GoutsList() {

  const drinks = useSelector(state => state.drinksReducer)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadDrinks())
  }, []);

  useEffect(()=>{
    console.log(drinks)
  },[drinks]) 

  return (
    <div>
      <div className="ml-8 App-header GoutsList">
        <img alt="bg" src={bgImage} style={{ width: "100%" ,height:"780px",marginTop:"0px"}} />
        <div className="bgTransparent">
          {" "}
          <h1 className="Heading">QUEL GOÛT VOULEZ-VOUS BOIRE AUJOURD'HUI ? </h1>
        </div>

        {drinks.map((drink, index) => {
          const classname = `goutHover ${drink.className} ${drink.drinkQuantity <= 0?"grayscale-[1]":"grayscale-[0]"}`
          let image
          switch (drink.saveur) {
            case 1:
              image = Cassis
              break;
            case 2:
              image = CitronVert
              break;
              case 3:
              image = pasteque
              break;
              case 4:
              image = FiguedeBarbarie
              
              break;
              case 5:
              image = FruitDelapassion
              
              break;
              
              default:
              image = Cassis
              break;
          }
          return <Gout key={index} className={classname} saveur={drink.saveur} img={image} drink={drink}/>
        })}
      </div>
    </div>
  );
}
