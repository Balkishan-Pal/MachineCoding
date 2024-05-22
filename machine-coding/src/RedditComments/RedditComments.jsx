import React, { useState } from "react";
import RedditcommentComponent from "./RedditcommentComponent";

const nestedRedditComments = [
  {
    name: "Bali",
    comment: "hi kya kar rha hai",
    replies: [
      {
        name: "Raju",
        comment: "kuch nahi yar",
        replies: [{ name: "Srijan", comment: "kaha hai bhai", replies: [] }],
      },
    ],
  },
  {
    name: "Bipin",
    comment: "hey hiir",
    replies: [],
  },
  {
    name: "Ankur",
    comment: "hello bitches",
    replies: [],
  },
  {
    name: "Deepak",
    comment: "I was a fool that time",
    replies: [
      {
        name: "Radhe",
        comment: "are u a fool by any chance like me",
        replies: [{ name: "Shashank", comment: "hello mad man", replies: [] }],
      },
    ],
  },
  {
    name: "Bipin",
    comment: "chalo byer",
    replies: [],
  },
];

function RedditComments() {
  const [data, setData] = useState(nestedRedditComments);
  console.log("infinite");

  return <RedditcommentComponent data={data} setData={setData} />;
}

export default RedditComments;
