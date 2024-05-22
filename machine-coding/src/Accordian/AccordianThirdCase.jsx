import React from "react";

function AccordianThirdCase(props) {
  const { isOpenStateThird, setIsOpenStateThird, name, description, index } =
    props;

  const handleAccrodian = () => {
    console.log(index,isOpenStateThird)
    if ( isOpenStateThird) {
      setIsOpenStateThird(null);
    } else {
      setIsOpenStateThird(index);
    }
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
        <span>{name}</span> <span>{isOpenStateThird ? "Close" : "Open"}</span>
      </div>
      {isOpenStateThird && <div>{description}</div>}
    </div>
  );
}

export default AccordianThirdCase;
