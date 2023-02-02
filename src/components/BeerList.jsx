import React from 'react';
import { useBeers } from '../context/BeerContext';

const BeerPreview = ({ beer }) => {
  return (
    <div className="flex flex-col mx-4 my-2">
      <h2 className="font-bold">{beer.name}</h2>
      <p className="font-medium">{beer.style}</p>
      {beer.rating.map((rate) => (
        <div key={beer.name}>
          <p>Appearance: {rate.appearance}</p>
          <p>Smell: {rate.smell}</p>
          <p>Taste: {rate.taste}</p>
          <p>Aftertaste: {rate.aftertaste}</p>
          <p>Drinkability: {rate.drinkability}</p>
        </div>
      ))}
    </div>
  );
};

function BeerList() {
  const { beers } = useBeers();
  console.log(beers);
  return (
    <div className="grid grid-cols-4 gap-4 ">
      <h3 className="flex align-center justify-center">
        Previously Rated Beers
      </h3>
      {beers.map((beer) => (
        <BeerPreview key={beer.name} beer={beer} />
      ))}
    </div>
  );
}

export default BeerList;
