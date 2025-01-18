import React, { useEffect, useRef, useState } from "react";
let data = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 35 },
  { id: 4, name: "Alice", age: 20 },
  { id: 5, name: "Mike", age: 40 },
  { id: 10, name: "John", age: 25 },
  { id: 22, name: "Jane", age: 30 },
  { id: 31, name: "Bob", age: 35 },
  { id: 42, name: "Alice", age: 20 },
  { id: 51, name: "Mike", age: 40 },
];

function InfiniteScrollPRactice() {
  const autoref = useRef();
  const [newData, setNewData] = useState(data);
  const [loading, setLoading] = useState(false);

  // scrollheight
  // scrollTop
  // clientHeight
  //

  const handleScroll = () => {
    const container = autoref.current;
    const { scrollTop, scrollHeight, clientHeight } = container;
    let endOfboxReached = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (endOfboxReached) {
      setLoading(true);
      let id = setTimeout(() => {
        setNewData((prev) => [...prev, ...prev]);
        setLoading(true);
      }, 1000);

      return () => clearTimeout(id);
    }
  };

  useEffect(()=>{
    const container = autoref.current;
    container.addEventListener("scroll", handleScroll);
    return ()=> container.removeEventListener('scroll',handleScroll);



  },[])

  return (
    <div
      style={{
        maxHeight: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        border: "1px solid red",
        overflow: "auto",
      }}
      ref={autoref}
      onScroll={handleScroll}
    >
      {newData?.map((elem) => {
        return <div key={elem?.id}>{elem?.name}</div>;
      })}

      {loading? <div style={{fontWeight:'800'}}>Loading......</div>:''}
    </div>
  );
}

export default InfiniteScrollPRactice;
