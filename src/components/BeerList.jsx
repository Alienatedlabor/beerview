import React from 'react';
import { useBeers } from '../context/BeerContext';
import BeerPreview from './BeerPreview';

function BeerList() {
  const { beers } = useBeers();

  return (
    <div className="bg-gray-800">
      <h3 className="align-center flex justify-center text-white">
        Previously Rated Beers
      </h3>
      <div className="mx-3 my-2 grid grid-cols-4 gap-4 ">
        {beers.map(
          (beer) =>
            beer.hasRating && (
              <div key={beer.id} className="bg-gray-300 ">
                <BeerPreview key={beer.id} beer={beer} />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default BeerList;
