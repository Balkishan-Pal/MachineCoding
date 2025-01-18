import React, { useState } from "react";
import Comments from "./Comments";
import { useTreeHook } from "./useTreeHook";

function NestedComm({ commentData }) {
  const [commentInput, setCommentInput] = useState("");

  const { comnetData, insertNode, editNode, deleteNode } =
    useTreeHook(commentData);

  const handleChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleReplt = (id, comment) => {
    if (id) {
      insertNode(id, comment);
    } else {
      console.log("hello");
      insertNode(undefined, commentInput);
    }
    setCommentInput('')
  };

  const handleEdit=(id,content)=>{
    editNode(id,content)
  }

  return (
    <div>
      <div>
        <input
          value={commentInput}
          onChange={handleChange}
          placeHolder="Please add a comment....."
        />
        <button onClick={() => handleReplt(undefined)}>Reply</button>
      </div>

      {comnetData?.map((repl) => {
        return (
          <div key={repl.id} style={{ display: "grid", gap: "20px" }}>
            <Comments commentData={repl} handleReplt={handleReplt} handleEdit={handleEdit} />
          </div>
        );
      })}
    </div>
  );
}

export default NestedComm;
