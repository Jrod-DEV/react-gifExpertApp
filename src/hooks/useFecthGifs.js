import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 1500);
    });
  }, [category]);

  return state;
};
