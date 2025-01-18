import React from "react";

import mockData from "../OriginalNestedComment/mocakdata.json";
import NestedComm from "./NestedComm";

function Parent() {
  return (
    <div>
      <NestedComm commentData={mockData} />
    </div>
  );
}

export default Parent;
