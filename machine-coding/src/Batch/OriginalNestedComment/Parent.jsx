import React from "react";
import NestedComment from "./NestedComment";

import mockData from "./mocakdata.json";

function Parent() {
  return (
    <div>
      <div>Hey! this is me the dangerous aadmi of all time.</div>
      <NestedComment commentDataInitial={mockData} />
    </div>
  );
}

export default Parent;
