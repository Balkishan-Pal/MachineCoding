import React, { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);

  const handleRating = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  console.log(hovered,'hovered')
  console.log(rating,'rating')

  return (
    <div style={{ display: "flex" }}>
      {[1, 2, 3, 4, 5]?.map((start, index) => {
        return (
          <div
            style={{
              border: "1px solid black",
              height: "50px",
              width: "50px",
              background: hovered || hovered==0 
                ? index <= hovered
                  ? "yellow"
                  : ""
                : rating
                ? index <= rating
                  ? "yellow"
                  : ""
                : "",
            }}
            key={start}
            onClick={() => handleRating(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {start}
          </div>
        );
      })}
    </div>
  );
}

export default StarRating;
