import React, { useEffect, useState } from "react";
import "./MMTPRactice.css";

function MMTPractice() {
  const [data, setData] = useState([]);
  const [startRemoval, setStartREmoval] = useState(false);

  const handleClick = (selectedItem) => {
    setData((prev) => {
      if (prev.length + 1 === 9) {
        setStartREmoval(true);
      }
      if (prev.includes(selectedItem)) {
        // removing redundant
        return prev;
      }
      return [...prev, selectedItem];
    });
  };

  useEffect(() => {
    let intervalID;

    if (data.length === 0) {
        console.log(data,'data')
        setStartREmoval(false);
    }
    if (startRemoval && data.length > 0) {
      intervalID = setInterval(() => {
        let newArrray = [...data];
        newArrray.shift();
        setData(newArrray);
      }, 300);
    }

    return () => clearInterval(intervalID);
  }, [data]);

  return (
    <div className="parent">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item) => {
        return (
          <div
            style={{ background: data.includes(item) ? "green" : "" }}
            onClick={() => handleClick(item)}
            className="child"
            key={item}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default MMTPractice;
