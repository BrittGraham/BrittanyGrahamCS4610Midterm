import { useState } from "react";

//I cannot for the life of me figure out why it throws an error when loading the
// page. I would love some feed back as to why this isn't working. I'm having a hard time 
// understanding how to put this component into the _question_1 component.
// Wouldn't it be easier to have it all in the same component?
export const Counter = (min, max) => {
    const [count, setCount] = useState(0);
    var minimum = min.minimum;
    var maximum = max.maximum;
    // if (count == 0){
    //     setCount(minimum);
    // }
    const setInitialCount = () => {
        if(minimum > 0){
            return (
                <h2>
                    { setCount(minimum) }
                </h2>
            )
        }
        else if(maximum < 0){
            <h2>
                { setCount(maximum) }
            </h2>
        }
        else{
            <h2>
                { setCount(0) }
            </h2>
        }
    }
    const Increment = () => {
        if(count === maximum){
            setCount(maximum);
        }
        else{
            setCount(count + 1);
        }
    }
    const Decrement = () => {
        if (count === minimum){
            setCount(minimum);
        }
        else{
            setCount(minimum - 1);
        }
    }
    return (
        <div>
            <div>{setInitialCount()}</div>
            <div>
                <button onClick={Decrement()}>Decrement</button>
                <button onClick={Increment()}>Increment</button>
            </div>
        </div>
      );
}