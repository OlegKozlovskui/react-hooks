import React, { useState, useCallback } from 'react';
import './App.css';
import Form from './components/Form';
import Hello from './components/Hello';

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);

  return (
    <div className="App">
      <Form />
      <Hello increment={increment}/>
      <em>Count:{count}</em>
    </div>
  );
}

export default App;
