import React, { useRef, useState } from "react";

function ToDoTable(props) {
  const { data, setData } = props;
  let inputRef = useRef([]);

  const handleDelete = (_index) => {
    let filteredData = data?.filter((_, i) => _index !== i);
    setData(filteredData);
  };

  const handleEdit = (_index) => {
    inputRef?.current?.[_index]?.focus();
  };

  const handelChange = (e, index) => {
    const { value, type, checked, name } = e.target;

    let updatedDatainFous = [...data];
    console.log(updatedDatainFous[index],'updatedDatainFous[index]')

    updatedDatainFous[index]={
      ...updatedDatainFous[index],
      [name]: type === "checkbox" ? checked : value,
    }
    setData(updatedDatainFous);
  };

  return (
    <div>
      {data?.map((el, index) => (
        <div key={index}>
          <input
            type="checkbox"
            onChange={(e) => handelChange(e, index)}
            checked={el?.completed}
            name="completed"
          />
          <input
            ref={(el) => (inputRef.current[index] = el)}
            style={{ border: "none" }}
            onChange={(e)=>handelChange(e,index)}
            value={el?.name}
            name="name"
          />
          <span>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default ToDoTable;
