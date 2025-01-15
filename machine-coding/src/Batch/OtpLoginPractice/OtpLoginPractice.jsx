import React, { useEffect, useRef, useState } from "react";
import "./OtpLoginPractice.css";

function OtpLoginPractice() {
  const inputsRef = useRef([]);
  const [inputs, setInputs] = useState(Array(4).fill(""));

  const handleOnchange = (e, index) => {
    const { value } = e.target;
    const newInputs = [...inputs];
    newInputs[index] = value[value.length - 1];
    setInputs(newInputs);

    // shift one shift aage
    if (index < 3 && inputsRef.current[index + 1] && value) {
      inputsRef.current[index + 1].focus();
    }
    //
  };
  const handlekeyDown = (e, index) => {
    if (e.key === "Backspace" && !inputs[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };
  const handleClick = (index) => {
    inputsRef.current[index].setSelectionRange(1, 1);
  };

  // when this component renders, directly focusing on first index
  useEffect(() => {
    if (inputsRef.current[0]) inputsRef.current[0].focus();
  }, []);
  return (
    <div>
      {inputs.map((val, index) => {
        return (
          <input
            key={index}
            ref={(inp) => (inputsRef.current[index] = inp)}
            type="text"
            value={val}
            onChange={(e) => handleOnchange(e, index)}
            onKeyDown={(e) => handlekeyDown(e, index)}
            onClick={() => handleClick(index)}
            className="input"
          />
        );
      })}
      otp login
    </div>
  );
}

export default OtpLoginPractice;
