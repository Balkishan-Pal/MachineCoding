import { useState } from "react";

export function useTreeHook(mockdata) {
  const [commentData, setCommentData] = useState(mockdata);

  const insertNode = (tree, commentId, content) => {
    return tree?.map((rep) => {
      if (rep?.id === commentId) {
        return {
          ...rep,
          replies: [...rep.replies, content],
        };
      } else if (rep?.replies?.length > 0) {
        return {
          ...rep,
          replies: insertNode(rep.replies, commentId, content),
        };
      }
      return rep;
    });
  };

  const insertComment = (commentId, content) => {
    console.log("aya");
    let newData = {
      id: new Date().toISOString(),
      replies: [],
      content: content,
    };

    if (commentId) {
      setCommentData((prev) => insertNode(prev, commentId, newData));
    } else {
      console.log(0);
      setCommentData((prev) => [newData, ...prev]);
    }
  };

  const insertEditNode = (treeData, commentId, content) => {
    return treeData?.map((rep) => {
      if (rep.id === commentId) {
        return {
          ...rep,
          content: content,
        };
      } else if (rep.replies?.length > 0) {
        return {
          ...rep,
          replies: insertEditNode(rep.replies, commentId, content),
        };
      }
      return rep;
    });
  };

  const editComment = (commentId, content) => {
    setCommentData((prev) => insertEditNode(prev, commentId, content));
  };

  const insertDeleteNode = (tree, commentId) => {
    return tree.reduce((acc, curr) => {
      if (commentId === curr.id) {
        return acc;
      } else if (curr?.replies?.length > 0) {
        curr.replies = insertDeleteNode(curr.replies, commentId);
      }
      return [...acc,curr]
    }, []);
  };

  const deleteNode = (commentId) => {
    setCommentData((prev) => insertDeleteNode(prev, commentId));
  };

  return { commentData, insertComment, editComment,deleteNode };
}
