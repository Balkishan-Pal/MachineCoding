import React, { useState } from "react";
import Comments from "./Comments";

const commentDataa = {
  commentid: 1,
  items: [
    {
      commentid: "32142342",
      name: "Hello 1",
      items: [{ commentid: "webgey7g3", name: "Good morningi", items: [
        { commentid: "webgeyddgey7g3", name: "Good j", items: []}

      ] }],
    },
    { commentid: "3214sdoj2342", name: "Namste", items: [] },
    { commentid: "fjdsdvdsvki", name: "hi bro", items: [] },
  ],
};

function CommentStructure() {
  const [commentsData, setCommentsData] = useState(commentDataa);

  return <div>{<Comments comment={commentsData} />}</div>;
}

export default CommentStructure;
