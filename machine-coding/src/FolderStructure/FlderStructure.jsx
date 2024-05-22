import React, { useState } from "react";
import { folderData } from "./FolderData";
import STructureComponent from "./STructureComponent";

function FlderStructure() {
  const [originalData, setOriginalData] = useState(folderData);

  console.log(originalData, "originalData");
  return (
    <div>
      <STructureComponent
        originalData={originalData}
        setOriginalData={setOriginalData}
      />
    </div>
  );
}

export default FlderStructure;
