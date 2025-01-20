import React, { useEffect, useState } from "react";

const metaData = [
  {
    color: "red",
    next: "yellow",
    time: 3000,
  },
  {
    color: "yellow",
    next: "green",
    time: 3000,
  },
  {
    color: "green",
    next: "red",
    time: 3000,
  },
];

function TrafficLight() {
  const [currentColor, setCurrentColor] = useState("red");

  const nextColor = metaData?.find((ind) => ind?.color === currentColor);

  useEffect(() => {
    let timeInterval = setInterval(() => {
      setCurrentColor(nextColor.next);
    }, nextColor.time);

    return () => clearInterval(timeInterval);
  }, [currentColor]);

  console.log(currentColor,'currentColor')

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{ height: "20px", width: "20px", border: "1px solid black",background:currentColor==='red' ? 'red':'' }}
      ></div>
      <div
        style={{ height: "20px", width: "20px", border: "1px solid black", background:currentColor==='green'? 'green':''}}
      ></div>
      <div
        style={{ height: "20px", width: "20px", border: "1px solid black" ,background:currentColor ==='yellow'?'yellow':''}}
      ></div>
    </div>
  );
}

export default TrafficLight;
