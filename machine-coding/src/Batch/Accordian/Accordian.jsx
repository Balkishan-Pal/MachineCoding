import React, { useState } from "react";
import AccordianStructure from "./AccordianStructure";

const accordianData = [
  { title: "first", content: "my name is first content" },
  { title: "second", content: "my name is second content" },
  { title: "third", content: "my name is third content" },
];

// open all at once
// open only tageted, and close only targeteted.
// multiple can be open, and closed

function Accordian() {
  const [openAccordian, setOpenAccordian] = useState(null);

  return (
    <div>
      {accordianData?.map((acc, index) => (
        <AccordianStructure
          key={index}
          data={acc}
          setOpenAccordian={setOpenAccordian}
          openAccordian={openAccordian === index}
          index={index}
        />
      ))}
    </div>
  );
}

export default Accordian;
