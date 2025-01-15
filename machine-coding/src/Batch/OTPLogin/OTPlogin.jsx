import React, { useEffect, useRef, useState } from "react";
import "./OTPlogin.css";

function OTPlogin() {
  const inputsRf = useRef([]);

  const [inputs, setInputs] = useState(Array(4).fill(""));

  const handleClick = (index) => {
    inputsRf.current[index].setSelectionRange(1, 1);
  };
  const handleOnchange = (e, index) => {
    const { value } = e.target;
    const newInputs = [...inputs];
    newInputs[index] = value[value.length - 1];
    setInputs(newInputs);

    // moving to next input
    if (index < 3 && value && inputsRf.current[index + 1]) {
      inputsRf.current[index + 1].focus();
    }
    // trigger submit
    let combinedOTP = newInputs.join("");
    if (combinedOTP.length === 4) {
      console.log("Transaction successfull", combinedOTP);
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      inputsRf.current[index - 1] &&
      !inputs[index]
    ) {
      inputsRf.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (inputsRf.current[0]) {
      inputsRf.current[0]?.focus();
    }
  }, []);

  return (
    <div>
      {inputs?.map((val, index) => {
        return (
          <input
            key={index}
            ref={(inps) => (inputsRf.current[index] = inps)}
            type="text"
            value={val}
            onChange={(e) => handleOnchange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onClick={() => handleClick(index)}
            className="inputs"
          />
        );
      })}
    </div>
  );
}

export default OTPlogin;
