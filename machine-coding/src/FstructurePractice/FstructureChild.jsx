import React, { useState } from "react";
import GolderIcon from "../FolderStructure/Images/GolderIcon";
import FileIcon from "../FolderStructure/Images/FileIcon";

function FstructureChild(props) {
  const { data, setData } = props;
  const [showItems, setShowItems] = useState({});
  const [showInput, setShowInput] = useState(null);
  const [type, setType] = useState(null);

  const handleShowItmes = (id) => {
    setShowItems({
      ...showItems,
      [id]: !showItems[id],
    });
  };

  const handleAddItems = (e, type, id) => {
    e.stopPropagation();
    setShowInput(id);
    setType(type);
  };
  const handleInput = (e, id) => {
    if (e.keyCode === 13 && e.target.value) {
      const newItem = {
        title: e.target.value,
        isFolder: type,
        items: type ? [] : undefined,
        id: new Date(),
      };


      const newItemFunc = (items,id)=>{

        return items?.map((item)=>{
          if(item.isFolder && item.id === id){
            return { 
              ...item,
              items: [...item.items,newItem]
            }
          }else if(item?.items){
            return{
              ...item,
              items:newItemFunc(item?.items,id)
            }

          }
          return item
        })


      }

        setData((prev)=>newItemFunc(prev,id) )
        setShowInput(null)

    }
  };

  return (
    <div>
      {data?.map((el) => (
        <div
          style={{
            textAlign: "left",
            margin: "10px",
            borderLeft: "1px solid black",
          }}
          key={el?.id}
        >
          <div
            style={{
              background: "lightgrey",
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={() => handleShowItmes(el.id)}
          >
            <span>
              {el?.isFolder ? (
                <GolderIcon height="20px" width="20px" />
              ) : (
                <FileIcon height="20px" width="20px" />
              )}
              {el.title}
            </span>

            {el.isFolder && (
              <span>
                <button
                  type="button"
                  onClick={(e) => handleAddItems(e, true, el.id)}
                >
                  Add Folder
                </button>
                <button
                  type="button"
                  onClick={(e) => handleAddItems(e, false, el.id)}
                >
                  Add File
                </button>
              </span>
            )}
          </div>

          {showInput === el.id && (
            <input
              type="input"
              placeholder="enter name"
              onKeyDown={(e) => handleInput(e, el.id)}
              autoFocus
              onBlur={() => setShowInput(null)}
            ></input>
          )}

          {el?.items?.length > 0 && showItems[el.id] && (
            <FstructureChild data={el.items} setData={setData} />
          )}
        </div>
      ))}
    </div>
  );
}

export default FstructureChild;
