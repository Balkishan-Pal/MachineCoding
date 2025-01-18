import { useState } from "react";

export const useTreeHook = (comments) => {
  const [comnetData, setCommentData] = useState(comments);

  const insertComm = (tree, commentID, newComment) => {
    return tree.map((rep) => {
      if (rep?.id === commentID) {
        return {
          ...rep,
          replies: [...rep.replies, newComment],
        };
      } else if (rep?.replies?.length > 0) {
        return {
          ...rep,
          replies: insertComm(rep.replies, commentID, newComment),
        };
      }
      return rep;
    });
  };

  const insertNode = (commentID, content) => {
    const newComment = {
      id: new Date().toISOString(),
      replies: [],
      content: content,
    };

    if (commentID) {
      setCommentData((prev) => {
        return insertComm(prev, commentID, newComment);
      });
    } else {
      setCommentData((prev) => [newComment, ...prev]);
    }
  };

  const editComp = (tree, id, content) => {
   return tree.map((rep) => {
      if (rep.id === id) {
        return {
          ...rep,
          content: content,
        };
      } else if (rep.replies.length > 0) {
        return {
          ...rep,
          replies: editComp(rep.replies, id, content),
        };
      }
      return rep;
    });
  };
  const editNode = (commentID, content) => {
    console.log(commentID,content)
    setCommentData((prev) => editComp(prev, commentID, content));
  };
  const deleteNode = () => {
    return;
  };

  return {
    comnetData,
    insertNode,
    editNode,
    deleteNode,
  };
};
