import React from "react";

function Action({ onClick, type, className }) {
  return (
    <div className={className} onClick={onClick}>
      {type}
    </div>
  );
}

export default Action;
