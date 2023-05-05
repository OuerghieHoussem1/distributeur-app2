import React, { useEffect, useState } from "react";
import "./style.css";
export default function WaterProgressBar() {
  const [progress, setProgress] = useState("wave");

  useEffect(() => {
    setTimeout(() => {
      setProgress("wave2");
    }, 3000);

    setTimeout(() => {
      setProgress("wave3");
    }, 5000);
  }, []);

  return (
    <>
      <div className="circle ">
        <div className={progress}></div>
      </div>
    </>
  );
}
