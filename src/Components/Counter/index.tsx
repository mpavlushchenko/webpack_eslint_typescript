import React from 'react';
import useCounter from './useCounter';

function Counter() {
  const { count, increment, reset } = useCounter();
  return (
    <>
      <p>Count: {count}</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </>
  );
}

export default Counter;
