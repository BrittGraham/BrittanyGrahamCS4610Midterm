import { useState } from "react";
const [count, setCount] = useState('');

export const Counter = (min, max) => {
    count = 0;
    var minimum = min.minimum;
    var maximum = max.maximum;
    const Increment = () => {
        if(count < maximum){
            setCount(count + 1);
        }
        else if (count === maximum){
            setCount(maximum);
        }
    }
    const Decrement = () => {
        if (count > minimum){
            setCount(minimum - 1);
        }
        else if(count === minimum){
            setCount(minimum);
        }
    }
    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={Decrement()}>Decrement</button>
                <button onClick={Increment()}>Increment</button>
            </div>
        </div>
      );
}