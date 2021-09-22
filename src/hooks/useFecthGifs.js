import { useState } from 'react/cjs/react.development';

export const useFetchGifs = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  setTimeout(() => {
    setState({
      data: [1, 2, 3, 4, 5, 6, 7],
      loading: false,
    });
  }, 3000);

  return state;
};
