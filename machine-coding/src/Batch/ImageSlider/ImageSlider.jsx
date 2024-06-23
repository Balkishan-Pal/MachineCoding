import React, { useEffect, useState } from "react";

// image slider on click forward and backword
// automatically slide in 1 sec
// main image should appear, also the secondary images should appear half
// put the buttons on top of image instead of side.

const data = [
  {
    name: "image1",
    url: "https://media.istockphoto.com/id/1400584574/photo/two-friends-hugging-during-a-dinner-celebration.jpg?s=1024x1024&w=is&k=20&c=YK1cf8WI2zW5_bu8x46cTbeK_Ytfj0xk5WpevdZDKe8=",
  },
  {
    name: "image2",
    url: "https://images.unsplash.com/photo-1718972167976-f8cb691d99d2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "image3",
    url: "https://images.unsplash.com/photo-1719032168861-994a74306944?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "image4",
    url: "https://plus.unsplash.com/premium_photo-1718146018251-1e59e5d6f2a1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "image5",
    url: "https://images.unsplash.com/photo-1718964313220-819cde834df7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function ImageSlider() {
  const [activeImage, setActiveImage] = useState(0);
  const [imgData, setImgData] = useState(data);

  const handleBtn = (_type) => {
    if (_type === "prev") {
      let calculation =
        Number(activeImage - 1 + imgData?.length) % imgData?.length;
      setActiveImage(calculation);
    } else {
      let calculation = Number(activeImage + 1) % imgData?.length;
      setActiveImage(calculation);
    }
  };

  useEffect(() => {
    let time = setInterval(() => {
      handleBtn("next");
    }, 2000);
    return () => clearInterval(time);
  }, [activeImage]);

  return (
    <div>
      <div
        style={{
         width:'500px',
          border: "1px solid black",
          display: "flex",
          justifySelf: "center",
          justifyItems: "center",
          position:'relative',
        //   transform: `translateX(-${activeImage * 100}%)`,
          transition: "transform 0.5s ease-in-out",

        }}
      >
        <button style={{position:'absolute',height:'100%',background:'transparent'}} type="button" onClick={() => handleBtn("prev")}>
          PREV
        </button>
        {
          <img
            style={{ width: "500px", height: "500px", objectFit: "cover" }}
            src={imgData?.[activeImage]?.url}
            alt={imgData?.[activeImage]?.name}
          ></img>
        }
        <button style={{position:'absolute',right:'0px',background:'transparent',height:'100%'}} type="button" onClick={() => handleBtn("next")}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
