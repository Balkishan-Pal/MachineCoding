import React, { useState } from "react";

function AccordianChild(props) {
  const { name, description } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleAccrodian = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div style={{ border: "1px solid black" }}>
      <div
        onClick={handleAccrodian}
        style={{
          padding: "10px",
          fontSize: "18px",
          fontWeight: "600",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{name}</span> <span>{isOpen? 'Close':'Open'}</span>
      </div>
      {isOpen && <div>{description}</div>}
    </div>
  );
}

export default AccordianChild;
