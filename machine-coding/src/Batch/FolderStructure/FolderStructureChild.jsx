import React, { useState } from "react";

function FolderStructureChild(props) {
  const { data, setData } = props;

  const [showChil, setShowChild] = useState({});
  const [type, setType] = useState("");
  const [showInput, setShowInput] = useState("");

  const handleAddItems = (e, type, id) => {
    e.stopPropagation();
    setShowInput(id);
    setType(type);
  };

  const handleInput = (e, id) => {
    const { value } = e.target;

    const newData = {
      name: value,
      isFolder: type,
      items: type === "folder" ? [] : "",
      id: new Date(),
    };

    if (e.keyCode === 13 && value) {
      const findingFunction = (data, id) => {
        return data?.map((el) => {
          if (el.id === id) {
            return {
              ...el,
              items: [...el.items, newData],
            };
          } else if (el.items.length > 0) {
            return {
              ...el,
              items: findingFunction(el.items, id),
            };
          }
          return el;
        });
      };

      setData((prev) => findingFunction(prev, id));
      setShowInput(null);
    }
  };

  return (
     <div>
      {data?.map((el, index) => (
        <div
          style={{ borderLeft: "1px solid black", marginLeft: "10px" }}
          key={el?.name + index}
        >
          <div
            style={{ display: "flex", gap: "40px" }}
            onClick={() => {
              setShowChild({ ...showChil, [el?.id]: !showChil[el?.id] });
            }}
          >
            {el?.name}
            {el.isFolder && (
              <span>
                <button onClick={(e) => handleAddItems(e, "file", el.id)}>
                  File
                </button>
                <button onClick={(e) => handleAddItems(e, "folder", el.id)}>
                  Folder
                </button>
              </span>
            )}
          </div>

          {showInput === el.id && (
            <input
              autoFocus
              onBlur={() => {
                setShowInput(null);
              }}
              onKeyDown={(e) => handleInput(e, el.id)}
            ></input>
          )}

          {showChil[el?.id] && el?.items?.length > 0 && (
            <FolderStructureChild data={el.items} setData={setData} />
          )}
        </div>
      ))}
    </div>
  );
}

export default FolderStructureChild;
