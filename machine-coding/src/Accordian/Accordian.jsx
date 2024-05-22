import React, { useState } from "react";
import AccordianChild from "./AccordianChild";
import AccordianThirdCase from "./AccordianThirdCase";

const accordianTestData = [
  { name: "title 1", description: "hi this is me from Bhopal" },
  { name: "title 2", description: "hi this is me from Banglore" },
  { name: "title 3", description: "hi this is me from Bhutan" },
  { name: "title 4", description: "hi this is me from Bairagarh" },
];

//1. ek baar wo tru kr ki sab ek saath open ho or sab ek sath close ho - third case me === index ko hata do or child me jaa k is is else ki condition hata denge or handleaccordian ka logic change kr denge, or state me sirf tur or false le lenge 
//2. ek baar wo try kr ki sb ek ek kr k khul rahe hai,or sab band bhi ho rahe hai.  - chil me isOpenSate bananana is case me.
//3. ek baar esa kr kr ki, ek bar me sirf ek hi khule, or dusra pr clik kre to wo khul jaae or pehla band ho jaae band ho jae. is case me isopen waali state parent me hogi or game index me hoga.
function Accordian() {
  const [isOpenStateThird, setIsOpenStateThird] = useState(null); // thisrd case k liye hai

  return (
    <div style={{ display: "flex", flexDirection: "column",gap:'50px' }}>
      <div>
        {accordianTestData?.map((el, index) => (
          <AccordianChild // second wala case
            key={index}
            name={el?.name}
            description={el.description}
          />
        ))}
      </div>

      <div>
        {accordianTestData?.map((el, index) => (
          <AccordianThirdCase
            key={index}
            isOpenStateThird={isOpenStateThird === index}
            setIsOpenStateThird={setIsOpenStateThird}
            name={el?.name}
            description={el?.description}
            index ={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Accordian;
