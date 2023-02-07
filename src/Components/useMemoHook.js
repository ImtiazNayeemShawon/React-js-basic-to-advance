import React, { useState, useMemo } from 'react';


export default function UseMemoHook({ data }) {
  const [count, setCount] = useState(0);

  const computedValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <div><h1>{computedValue}</h1></div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}