import React, { useState } from "react";

function Comment({ commentParticularData, handleAddreply, handleEditComm,onDelete }) {
  const [expand, setExpand] = useState(false);
  const [commReplies, setCommReplies] = useState("");

  const [editMode, setEditMode] = useState(false);
  const [editChanges, setEditChanges] = useState(
    commentParticularData?.content
  );

  const handleToggle = () => {
    setExpand(!expand);
  };

  const handleOnchange = (e) => {
    setCommReplies(e.target.value);
  };

  const handleSubmitReplies = () => {
    if (commReplies) {
      handleAddreply(commentParticularData?.id, commReplies);
    }
    setCommReplies("");
  };

  const handleEdit = () => {
    if (editMode) {
      handleEditComm(commentParticularData.id,editChanges)
    }
    setEditMode(!editMode);
  };

  const onEditChange = (e) => {
    setEditChanges(e.target.value);
  };

  const handleDeleteNode = ()=>{
    onDelete(commentParticularData.id)
  }

  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <div style={{ marginLeft: "30px", borderLeft: "1px solid grey" }}>
        <span style={{ display: "flex", alignItems: "center" }}>
          {!editMode ? (
            <p style={{ fontWeight: "800" }}>
              {commentParticularData?.content}
            </p>
          ) : (
            <input value={editChanges} onChange={onEditChange} />
          )}
          <div>
            <button onClick={handleToggle}> {expand ? "Hide" : "Reply"}</button>
            <button onClick={handleEdit}> {editMode ? "Save" : "Edit"}</button>
            <button onClick ={handleDeleteNode}>Delete</button>
          </div>
        </span>

        {expand && (
          <div>
            <input
              placeholder="Reply to comment...."
              value={commReplies}
              onChange={handleOnchange}
            />
            <button onClick={handleSubmitReplies}> Reply </button>
            {commentParticularData?.replies?.map((reply) => (
              <Comment
                key={reply?.id}
                commentParticularData={reply}
                handleAddreply={handleAddreply}
                handleEditComm={handleEditComm}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
