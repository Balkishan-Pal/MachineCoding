import React, { useEffect, useState } from "react";
let order = 0;

function MMT() {
  const [data, setData] = useState([]);
  let allDataFilled = data?.every((el) => el?.order);


  const getBoxes = (initial) => {
    let boxData = [];


    const boxes = [1, 2, 3].map((_, i) => {
      return [1, 2, 3].map((_, j) => {
        if (!(i === 1 && j > 0)) {
          if (initial) {
            return boxData.push({ i, j, isCliked: false, order: null });
          }

          return (
            <div
              style={{
                border: "1px solid black",
                height: "70px",
                width: "70px",
                background: data?.find((el) => el?.i === i && el?.j === j)
                  ?.isCliked
                  ? "green"
                  : "",
              }}
              key={i + "-" + j}
              onClick={() => handleClick(i, j)}
            ></div>
          );
        } else {
          return <div></div>;
        }
      });
    });

    if (initial) {
      return boxData;
    }

    return boxes;
  };

  const handleClick = (i, j) => {
    console.log(i, j);

    let temp = [...data];
    let targetedData = temp.find((el) => el?.i === i && el?.j === j);
    targetedData.isCliked = true;
    targetedData.order = ++order;

    temp?.sort((a, b) => a.order - b.order);
    setData(temp);
  };

  useEffect(() => {
    setData(getBoxes("initial"));
  }, []);

  console.log(data);

  useEffect(() => {
    console.log(allDataFilled,'allDataFilled')
    if (allDataFilled) {
      data?.forEach((el, i) => {
        return setTimeout(() => {
          let temp = [...data];
          temp[i].isCliked = false;
          temp[i].order = null;
          setData(temp)
        }, (i+1) * 1000);
      });
    } else {
    }
  }, [data,allDataFilled]);

  return (
    <div
      style={{
        width: "300px",
        display: "grid",
        gap: "10px",
        gridTemplateColumns: "repeat(3,1fr)",
      }}
    >
      {getBoxes()}
    </div>
  );
}

export default MMT;
