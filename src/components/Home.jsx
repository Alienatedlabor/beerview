import Weeklybeer from './Weeklybeer';
import React from 'react';
import Nav from './Nav';
import JudgingForm from './JudgingForm';
import BeerList from './BeerList';

function Home() {
  return (
    <div>
      <Nav />
      <Weeklybeer />
      <BeerList />
    </div>
  );
}

export default Home;

{
  /* <JudgingForm /> */
}
