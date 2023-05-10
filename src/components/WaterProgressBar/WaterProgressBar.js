import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { lessBeverages } from "../../controllers/card";
export default function WaterProgressBar() {
  const [progress, setProgress] = useState("wave");

  const dispatch = useDispatch()

  const card = useSelector(state => state?.currentCard)


  useEffect(() => {
    setTimeout(() => {
      setProgress("wave2");
    }, 3000);

    setTimeout(() => {
      setProgress("wave3");
    }, 5000);

    console.log(card)
    dispatch(lessBeverages(card))
  }, []);

  return (
    <>
      <div className="circle ">
        <div className={progress}></div>
      </div>
    </>
  );
}
