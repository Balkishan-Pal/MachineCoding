// counter
// clock - stopwatch
// todo
// calculator
// debouncing
// throttling

import React, { useEffect, useState } from "react";

function Counter() {
  // questions in counter
  // y u using prev - to make our counter always in lateststate, if we use count +1 and rapidly press increment it will show some discrepency. y ?

  //  This happens because of the way React batches state updates and closures capture values.
  //  React doesn't guarantee that the state will be updated immediately after calling setCount.
  //  Instead, React may batch multiple state updates together for performance reasons. So,
  //  if you quickly click the button multiple times, React might queue up several state updates without applying them immediately.

  //On the other hand, when you use the functional form (setCount((prev) => prev + 1)), React guarantees that the function passed to setCount will receive the latest state value at the time it's executed. This ensures that you're always working with the most up-to-date state, regardless of how many state updates are queued or when they're applied.

  // question make it a input
  // make it with settimeout

  const [count, setCount] = useState("");

  const handleClick = (e) => {
    let action = e.target.getAttribute("action");

    if (action === "increment") {
      setCount((prev) => Number(prev + 1));
    } else {
      setCount((prev) => Number(prev - 1));
    }
  };

  const handelInput = (e) => {
    setCount(Number(e.target.value));
  };

  useEffect(()=>{
    setTimeout(()=>{
        setCount((prev)=> Number(prev +1))
    },1000)

    return () => clearTimeout();
    

  })

  return (
    <div>
      {/* <p>{count}</p> */}
      <input type="number" value={count} onChange={handelInput}></input>
      <div onClick={handleClick}>
        <button action="increment" type="button">
          Increment
        </button>
        <button action="decrement" type="button">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
