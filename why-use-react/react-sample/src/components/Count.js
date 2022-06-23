import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <span className="count-display">{count}</span>
      <div className="buttons">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
    </>
  );
}

export default Count;
