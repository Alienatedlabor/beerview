import React from 'react';
import { useBeers } from '../context/BeerContext';

function RatingPreview({ ratings }) {
  const { beers, updateBeer } = useBeers();

  return <div></div>;
}
export default RatingPreview;
// TODO: a reduce function to average ratings and then a map function to display them here?
