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

// if he says appy it on a container then - for vertical scroll follow these
function InfiniteScroll() {
  const containerRef = useRef(null);
  const [apiData, setApiData] = useState(farziData);

  const handleScroll = () => {
    const scrollContainer = containerRef.current;

    const { clientHeight, scrollTop, scrollHeight } = scrollContainer;
    console.log(clientHeight, scrollTop, scrollHeight);
    const isEndOfPage = clientHeight + scrollTop >= scrollHeight;

    if (isEndOfPage) {
      setApiData((prev) => [...prev, ...farziData]);
    }
  };

  useEffect(() => {
    const scrollContainer = containerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowY: "scroll",
        gap: "10px",
      }}
    >
      {apiData.map((names, index) => (
        <div style={{ padding: "10px", border: "1px solid green" }} key={index}>
          {names?.name}
        </div>
      ))}
    </div>
  );
}

// if scroll horizonatally
// function InfiniteScroll() {
//   const scrollRef = useRef(null);
//   const [apiData, setApiData] = useState(farziData);
//   const [loading, setLoading] = useState(false);

//   const handleScroll = () => {
//     const scrollContainer = scrollRef.current;
//     const { clientWidth, scrollLeft, scrollWidth } = scrollContainer;

//     console.log(clientWidth, scrollLeft, scrollWidth);

//     const isEndOfPage = Math.ceil(clientWidth + scrollLeft) >= scrollWidth;
//     if (isEndOfPage) {
//       setLoading(true);
//       let id = setTimeout(() => {
//         setLoading(false);
//         setApiData((prev) => [...prev, ...farziData]);
//       }, 2000);

//       return () => clearTimeout(id);
//     }
//   };

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     scrollContainer.addEventListener("scroll", handleScroll);
//     return () => scrollContainer.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       ref={scrollRef}
//       style={{
//         border: "1px solid green",
//         width: "100vw",
//         overflowX: "auto",
//         display: "flex",
//         gap: "10px",
//         justifyContent: "space-evenly",
//       }}
//     >
//       {apiData?.map((el, index) => (
//         <div
//           style={{
//             width: "fit-content",
//             padding: "50px",
//             border: "1px solid black",
//           }}
//           key={index}
//         >
//           {el?.name}
//         </div>
//       ))}

//       {loading && <div style={{height:'20px' ,width:'20px', background:'green', borderRadius:'20px'}}> loading.... </div>}
//     </div>
//   );
// }

// if he want to appy it on window vertically,
// isme hyan rakhna ki height na de aap.

// function InfiniteScroll() {
//   const [apiData, setApiData] = useState(farziData);
//  console.log( window?.innerHeight ,window.scrollY , document?.body?.scrollHeight)
//   const handleScroll = () => {
//     const isEndOfpage =
//       window?.innerHeight + window?.scrollY >= document?.body.scrollHeight;
//     if (isEndOfpage) {
//       setApiData((prev) => [...prev, ...farziData]);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("scroll", handleScroll);
//     return () => document?.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "15px",
//         // height: "100vh",
//         overflowX: "auto",
//         // width:'90%'
//       }}
//     >
//       {apiData?.map((el, index) => (
//         <div style={{ border: "1px solid green", padding: "20px" }} key={index}>
//           {el.name}
//         </div>
//       ))}
//     </div>
//   );
// }

export default InfiniteScroll;
