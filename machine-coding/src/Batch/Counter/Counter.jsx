import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = (type) => {
    if (type === "inc") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  //1 make count as input.
  const handleChange = (event) => {
    const { value } = event.target;
    setCount(+value);
  };

  // make it with setTimeout

//   useEffect(() => {
//   const timer =  setTimeout(() => {
//       setCount((prev) => +(prev + 1));
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

  // make count as input and let user type in it, whatever he writes from there only it needs to be sgtarted.
  // make it it with setTimeOut.


  // questions that can be asked 
   // - y u using prev ? because it will give latest state. if we do not use prev then there can be discrepencies
   // when u click on button quickly. because react updates state in batches  and it might queue up several state
   // updates without applying them immediately for performance reasons.

   // y u use return ()=>clearTimeOut(timer) - because it ensures that the timer is cleared if the component unmounts
   //  or if the effect re-runs (or if i click on add or subtract quiclky then the speed will not increase.)

   // ok so what if we dont write cleartimeout
   // - memoryleaks - if the component unmounts but the timer will still be running, so it will contonously run
   // - unexpected behaviour - if the useEffect runs again before the previous timer has finished,multiple timers 
   //   could be running concurrently leading to incorect ui updates. u can see the below steps

    // Step-by-Step Analysis of Rapid State Changes
// Initial Render:

// count is initialized to 0.
// The useEffect runs, setting a setTimeout that will increment count after 1000 milliseconds.
// Rapid Button Clicks:

// Suppose you click the button 20 times quickly.
// Each click updates count, causing a re-render and the useEffect to run again.


// Effects and Timers Accumulation:
// Each of the 20 state updates causes the useEffect to run, setting up a new setTimeout.
// These setTimeout functions are all scheduled to run 1000 milliseconds after their respective setup, but they are set up at different times within a very short interval.
// Since there's no cleanup, the timers from previous renders are not cleared.


// Timers Execution:

// After approximately 1000 milliseconds from the first setTimeout setup, the first timer fires and increments count by 1.
// Shortly after, the second timer fires and increments count by 1, and so on.
// If all 20 timers are close in their execution times, you'll see count increment multiple times in a very short span.

  return (
    <div>
      <input value={count} onChange={handleChange}></input>
      <button type="button" onClick={() => handleCount("inc")}>
        Add
      </button>
      <button type="button" onClick={() => handleCount("dec")}>
        Subtract
      </button>
    </div>
  );
}

export default Counter;
