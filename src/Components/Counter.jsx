import React from 'react'
import Button from './Button'
import { useCounter }  from '../context/CounterContext'
const Counter = (props) => {
  const {count, setCount} = useCounter();
  console.log(`value is ${count}`);
  return (
    <div>
      <h4>{count}</h4>
      <Button onClick={() => setCount(count + 1 )} text="Increment"/>
      <Button onClick={() => setCount(count - 1)} text="Decrement"/>
    </div>
  )
}

export default Counter