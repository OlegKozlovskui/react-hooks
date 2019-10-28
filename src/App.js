import React, { useState, useMemo } from 'react';

import './App.css';
import { useFetch } from './hooks/useFetch';

function computeLongestWord(data) {
  if (!data) {
    return [];
  }

  let longestWord = '';

  data.forEach(sentence => sentence.split(' ').forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }));

  return longestWord;
};

function App() {
  const [count, setCount] = useState(0);
  const { data } = useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json');

  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  return (
    <div className="App">
      <em>Count:{count}</em>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {longestWord}
    </div>
  );
}

export default App;
