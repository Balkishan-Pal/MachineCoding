import React, { useEffect, useState } from "react";

function AutoCompleteSearchBar() {
  //google api k through...
  // make normal auto complete, with debouncing.
  // he will ask u to optimize it then u can optimize it
  // ek baar jo data search kr chuke hai jb hum use mitaye to api should not go, it shpuld cache.

  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [cacheData, setCacheData] = useState({});

  useEffect(() => {
    if (cacheData[input]) {
      setData(cacheData[input]);
    } else {
      let time = setTimeout(() => {
        fetchData();
      }, 300);
      return () => clearTimeout(time);
    }
  }, [input]);

  const fetchData = async () => {
    let data = await fetch(
      `https://www.google.com/complete/search?client=firefox&q=${input}`
    );
    let json = await data?.json();
    setCacheData({
      ...cacheData,
      [input]: json?.[1],
    });
    setData(json?.[1]);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <input onChange={handleChange} type="text" placeholder=""></input>
      </div>
      <div style={{ border: "1px solid black", width: "200px" }}>
        {data?.map?.((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
    </div>
  );
}

export default AutoCompleteSearchBar;
