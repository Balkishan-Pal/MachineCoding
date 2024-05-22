import React, { useState } from "react";
import RedditComments from "./RedditComments";

function RedditcommentComponent(props) {
  const { data, setData } = props;
  const [newReplyText, setNewReplyText] = useState("");

  const handleAddREply = (_index) => {
    const updatedData = [...data];
    updatedData[_index].replies.push({
      name: "New Reply User",
      comment: newReplyText,
      replies: [],
    });
    setData(updatedData);
    setNewReplyText("");
  };

  return (
    <div>
      {data?.map((comment, index) => (
        <div
          key={index}
          style={{
            // border: "1px solid black",
            padding: "10px",
            width: "300px",
            display: "flex",
            gap: "20px",
            justifyContent: "left",
          }}
        >
          <span> Photo</span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              //   borderLeft: "1px solid black",
              //   borderBottom:'1px solid black',
              alignItems: "start",
            }}
          >
            <span style={{ fontWeight: "700" }}>{comment?.name}</span>
            <span>{comment?.comment}</span>
            <div>
              <input
                type="text"
                value={newReplyText}
                onChange={(e) => setNewReplyText(e.target.value)}
              />
              <button type="button" onClick={() => handleAddREply(index)}>
                Reply
              </button>
            </div>
            {comment?.replies?.length > 0 && (
              <RedditcommentComponent data={comment?.replies} setData={setData} />
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

export default RedditcommentComponent;
