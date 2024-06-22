import React, { useState } from "react";
import { fData } from "./FData";
import FstructureChild from "./FstructureChild";

function FstructurePractice() {
  const [data, setData] = useState(fData);
  return (
    <div>
      <FstructureChild data={data} setData={setData} />
    </div>
  );
}

export default FstructurePractice;
