import { useEffect, useState } from 'react';
import { Counter } from './Counter';

//Note in Counter component.
export const Question1 = () => {
    const ranges = [
    {min: -5, max: 5},
    {min: -15, max: -5},
    {min: 5, max: 15}
  ]
  return <div>
    {/* {ranges.map((range) => {
      return <Counter min = {range.min} max = {range.max}></Counter>
    })} */}
  </div>;
};
