import React from 'react';
import { useBeers } from '../context/BeerContext';
import BeerPreview from './BeerPreview';

function BeerList() {
  const { beers } = useBeers();

  return (
    <div className="grid grid-cols-4 gap-4 ">
      <h3 className="align-center flex justify-center">
        Previously Rated Beers
      </h3>
      {beers.map(
        (beer) => beer.hasRating && <BeerPreview key={beer.id} beer={beer} />
      )}
    </div>
  );
}

export default BeerList;
