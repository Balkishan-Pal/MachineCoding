import React, { useState } from "react";

function Comments({ commentData, handleReplt, handleEdit }) {
  const [expand, setExpand] = useState(false);
  const [input, setIntput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editInput, setEditInput] = useState(commentData?.content);

  const handleToggler = () => {
    setExpand(!expand);
  };

  const editToogler = () => {
    if (editMode) {
      handleEdit(commentData?.id, editInput);
    }
    setEditMode(!editMode);
  };

  const handelREplyChange = (e) => {
    setIntput(e.target.value);
  };
  const handleREply = () => {
    handleReplt(commentData?.id, input);
    setIntput("");
  };

  const handleEditChange = (e) => {
    setEditInput(e.target.value);
  };
  return (
    <div style={{ paddingLeft: "10px" }}>
      <div
        style={{
          borderLeft: "1px solid black",
          display: "flex",
          justifyItems: "left",
        }}
      >
        {editMode ? (
          <input value={editInput} onChange={handleEditChange} />
        ) : (
          <p>{commentData?.content}</p>
        )}
        <button onClick={handleToggler}>{expand ? "Hide" : "Reply"}</button>
        <button onClick={editToogler}>{editMode ? "Save" : "Edit"}</button>
        <button>Delete</button>
      </div>

      {expand && (
        <div style={{ marginLeft: "30px" }}>
          <input
            value={input}
            placeholder="reply...."
            onChange={handelREplyChange}
          />
          <button onClick={handleREply}>reply</button>
          {commentData?.replies?.map((repl) => {
            return (
              <Comments
                key={repl?.id}
                commentData={repl}
                handleReplt={handleReplt}
                handleEdit={handleEdit}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Comments;
