import React, { useState } from "react";

function AccordianStructure(props) {
  const { data, index, openAccordian, setOpenAccordian } = props;
//   const [isOpen,setIsopen] = useState(false);

console.log(openAccordian,'openAccordian')

  const handleOpenAccordian = () => {

    if(openAccordian){
        setOpenAccordian(false)
    }else{
        setOpenAccordian(index);

    }
 
    // setIsopen((prev)=> !prev)
  };

  return (
    <div>
      <div
        onClick={handleOpenAccordian}
        style={{ border: "1px solid black", height: "40px" }}
      >
        {data?.title}
      </div>
      { openAccordian &&
        <div style={{ border: "1px solid green", height: "100px",background:'lightgrey' }}>
          {data?.content}
        </div>
      }
    </div>
  );
}

export default AccordianStructure;
