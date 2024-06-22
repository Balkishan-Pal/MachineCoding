import React, { useState } from "react";
import ToDoTable from "./ToDoTable";

function TODO() {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleInput = (event) => {
    const { value } = event.target;
    setInputVal(value);

    if(event.keyCode ===13){
        handleAddButton()
    }
  };

  const handleAddButton = () => {
    let inputData = {name:inputVal,completed:false}
    setData([...data, inputData]);
    setInputVal("");
  };

  return (
    <div>
      <input type="text" value={inputVal} onChange={handleInput} onKeyDown={handleInput}></input>
      <button type="button" onClick={handleAddButton} disabled={!inputVal} >
        Add
      </button>


      <div>
        <ToDoTable data={data} setData={setData} />
      </div>
    </div>
  );
}

export default TODO;
