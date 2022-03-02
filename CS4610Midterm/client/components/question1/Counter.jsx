import { useState } from "react";


export const Counter = (min, max, count, setCount) => {
    if(count === min){
        setCount(min);
    }
    else if(count === max){
        setCount(max);
    }
    return (
    <div>
        <h2>{count}</h2>
        <div>
            <button onClick={setCount(count - 1)}>Decrement</button>
            <button onClick={setCount(count + 1)}>Increment</button>
        </div>
    </div>
  );
}