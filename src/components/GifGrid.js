import React from 'react';
import { useFetchGifs } from '../hooks/useFecthGifs';


export const GifGrid = ({ category }) => {

  const { loading } = useFetchGifs();

  return (
    <>
      <h3> {category} </h3>
      {loading ? 'Loading...' : 'Data charged!'}
{/* 
      {      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>}
       */}
    </>
  );
};
