import React, { useEffect, useState } from "react";

function AutoCompleteSearch() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const fetchData = async () => {
    let data = await fetch(
      `https://www.google.com/complete/search?client=firefox&q=${input}`
    );

    let json = await data?.json();
    // setData(json?.[1]);
  };

  useEffect(() => {
    if (input) {
      fetchData();
    }
  }, [input]);

  console.log(data, "data");

  return (
    <div>
      <input value={input} placeholder="Search" onChange={handleChange}></input>
    </div>
  );
}

export default AutoCompleteSearch;
