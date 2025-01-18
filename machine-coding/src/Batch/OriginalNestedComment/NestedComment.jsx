import React, { useState } from "react";
import Comment from "./Comment";
import { useTreeHook } from "./Hook";

function NestedComment({ commentDataInitial, onSubmit, onEdit, onDelete }) {
  const { commentData, insertComment,editComment,deleteNode } = useTreeHook(commentDataInitial);

  const [addComent, setAddcComment] = useState("");
  const handleOnchange = (e) => {
    setAddcComment(e.target.value);
  };

  const handleAddreply = (id,_data) => {
    if(id){
        console.log('hello')
        insertComment(id, _data);
    }else{
        insertComment(undefined, addComent);
    }
    setAddcComment("");
  };


  const handleEditREply = (id,_data)=>{
    console.log('aya hu yaha pr',id,_data)
    editComment(id,_data)

  }

  const handleDElete =(cimmentID)=>{
    deleteNode(cimmentID)
  }

  return (
    <div>
      <div>
        <input
          placeholder="Add a coment......"
          value={addComent}
          onChange={handleOnchange}
        ></input>
        <button onClick={()=>handleAddreply(undefined)}> Add reply </button>
      </div>

      {commentData?.map((rep) => (
        <Comment
          key={rep.id}
          commentParticularData={rep}
          handleAddreply={handleAddreply}
          handleEditComm={handleEditREply}
          onDelete={handleDElete}
        />
      ))}
    </div>
  );
}

export default NestedComment;
