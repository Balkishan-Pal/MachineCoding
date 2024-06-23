import React, { useEffect, useRef, useState } from "react";

const farziData = [
  { name: "radah" },
  { name: "sham" },
  { name: "fefe" },
  { name: "Gate" },
  { name: "gatter" },
  { name: "raben" },
  { name: "radha" },
  { name: "shaam" },
  { name: "ki bagiya me more nacha" },
  { name: "kisne dekha" },
  { name: "maine dekha" },
  { name: "nahi tune nahi dekha" },
  { name: "radah" },
  { name: "hey" },
  { name: "hi" },
  { name: "helo" },
  { name: "nahi" },
  { name: "rehne de" },
  { name: "bye" },
  { name: "sham" },
  { name: "fefe" },
  { name: "Gate" },
];

function InfiniteScroll() {
  const ref = useRef();
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);

  const handleScroll = () => {
    let scrollContainer = ref.current;

    // horizonatl and vertical

    let {
      clientHeight,
      scrollTop,
      scrollHeight,
      scrollLeft,
      scrollWidth,
      clientWidth,
    } = scrollContainer;

    let endHeightReached = Math.ceil(clientHeight + scrollTop) >= scrollHeight;
    setloading(true);
    if (endHeightReached) {
      setTimeout(() => {
        setloading(false);
        setData((prev) => [...prev, ...farziData]);
      }, 2000);
    }
  };

  useEffect(() => {
    let scrollContainer = ref?.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setData((prev) => [...prev, ...farziData]);
    }, 2000);
  }, []);

  return (
    <div
      style={{
        height: "100vh", // for vertical
        flexDirection: "column", // vertical
        overflowY: "auto", // vertical
        display: "flex",
        gap: "20px",
        // overflowX: "auto",
        // width:'100vw'
      }}
      ref={ref}
    >
      {data?.map((el, index) => (
        <div style={{ border: "1px solid red" }} key={el?.name + index}>
          {el?.name}
        </div>
      ))}

      {loading && (
        <div
          style={{
            borderRadius: "50%",
            border: "1px solid grey",
            padding: "10px",
            background: "lightgrey",
          }}
        >
          loading...
        </div>
      )}
    </div>
  );
}

export default InfiniteScroll;
