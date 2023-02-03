import React from 'react';
import { useBeers } from '../context/BeerContext';

const BeerPreview = ({ beer }) => {
  return (
    <div className="mx-4 my-2 flex flex-col">
      <h2 className="font-bold text-black">{beer.name}</h2>
      <div className="flex gap-1">
        <label htmlFor="">Brewery: </label>
        <p className=" font-medium text-black">{beer.brewery}</p>
      </div>
      <div className="flex gap-1">
        <label htmlFor="">Style: </label>
        <p className=" font-medium text-black">{beer.style}</p>
      </div>
      <div className="flex gap-1">
        <label htmlFor="">Alcohol by Volume: </label>
        <p className=" font-medium text-black">{beer.abv}</p>
      </div>
      <h3 className="font-bold">
        {beer.upForVote === true ? `Votes: ${beer.voteCount}` : ''}
      </h3>

      {!beer.upForVote &&
        beer.rating.map((rate) => (
          <div key={beer.id}>
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

  return (
    <div className="grid grid-cols-4 gap-4 ">
      <h3 className="align-center flex justify-center">
        Previously Rated Beers
      </h3>
      {beers.map((beer) => (
        <BeerPreview key={beer.id} beer={beer} />
      ))}
    </div>
  );
}

export default BeerList;
