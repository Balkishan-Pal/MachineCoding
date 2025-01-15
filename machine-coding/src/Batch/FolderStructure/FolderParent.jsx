import React, { useState } from 'react'
import { dummyData } from './Data'
import FolderStructureChild from './FolderStructureChild';


function FolderParent() {
    const [data,setData] = useState(dummyData);


  return (
    <div>
      <FolderStructureChild data = {data} setData={setData} />
    </div>
  )
}

export default FolderParent
