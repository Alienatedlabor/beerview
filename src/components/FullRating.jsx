import React from 'react';

const FullRating = ({ beer }) => {
  return (
    <div>
      {beer.hasRating &&
        beer.ratings?.map((rate) => (
          <div className="my-2 flex flex-col" key={user.uid + beer.id}>
            <p>Appearance: {rate.appearance}</p>
            <p>Smell: {rate.smell}</p>
            <p>Taste: {rate.taste}</p>
            <p>Aftertaste: {rate.aftertaste}</p>
            <p>Drinkability: {rate.drinkability}</p>
            <p>Comments: {rate.comment}</p>
            <p>Rated by: {rate.ratedBy}</p>
          </div>
        ))}
    </div>
  );
};

export default FullRating;
// TODO: need a score total as well, probably using reduce but just adding hte variables would work as well. needs to be written to database tho.
