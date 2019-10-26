import React from 'react';

import { useFetch } from '../hooks/useFetch';

const Posts = () => {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');
  console.log(data);

  return (
    <strong>
      {loading ? 'Loading...' : JSON.stringify(data)}
    </strong>
  );
};

export default Posts;
