import React, { useState } from "react";
import GolderIcon from "./Images/GolderIcon";
import FileIcon from "./Images/FileIcon";

// folder enter krne pr wrong ho rha hia, also see how will i add files.

function STructureComponent(props) {
  const { originalData, setOriginalData } = props;
  const [show, setShow] = useState({});
  const [showInput, setShowInput] = useState(null);
  const [inputType, setInputType] = useState(null);

  console.log("infifnte", show);

  const handleShow = (id) => {
    setShow((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    //    setShow((prev) => ({[id]: !prev[id]}))
  };

  const AddMore = (e, type, id) => {
    e.stopPropagation();
    setShowInput(id);
    setInputType(type)
  };

  const handleInput = (e, id) => {
    if (e.keyCode === 13 && e.target.value) {

        const newItem = {
            id: Math.random().toString(36).substring(7), // Generate a unique id
            title: e.target.value,
            isFolder: inputType === "folder",
            items: inputType === "folder" ? [] : undefined,
          };


          const addNewItem = (items, id) => {
            return items.map(item => {
              if (item.id === id && item.isFolder) {
                return {
                  ...item,
                  items: [...item.items, newItem],
                };
              } else if (item.items) {
                return {
                  ...item,
                  items: addNewItem(item.items, id),
                };
              }
              return item;
            });
          };

 
          setOriginalData(prevData => addNewItem(prevData, id));
          setShowInput(null);
    }
  };

  return (
    <div>
      {originalData?.map((fol) => (
        <div
          style={{
            width: "250px",
            paddingLeft: "20px",
            textAlign: "left",
            borderLeft: "1px solid grey",
            paddingTop: "10px",
          }}
          key={fol?.id}
        >
          <div
            style={{
              background: fol?.isFolder ? "#f2f2f2" : "",
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={() => handleShow(fol?.id)}
          >
            <span>
              <span>
                {fol?.isFolder ? (
                  <GolderIcon height={20} width={20} />
                ) : (
                  <FileIcon height={20} width={20} />
                )}
              </span>
              <span> {fol?.title}</span>
            </span>

            {fol?.isFolder && (
              <span>
                <button onClick={(e) => AddMore(e, "folder", fol?.id)}>
                  +Folder
                </button>
                <button onClick={(e) => AddMore(e, "file", fol.id)}>
                  +File
                </button>
              </span>
            )}
          </div>
          {showInput === fol?.id && (
            <input
              onKeyDown={(e) => handleInput(e, fol?.id)}
              autoFocus
              onBlur={() => {
                setShowInput(null);
              }}
              type="text"
              placeholder="Enter folder name"
            />
          )}

          {fol?.items?.length > 0 && show[fol?.id] && (
            <STructureComponent
              originalData={fol?.items}
              setOriginalData={setOriginalData}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default STructureComponent;
