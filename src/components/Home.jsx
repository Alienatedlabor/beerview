import Weeklybeer from './Weeklybeer';
import React from 'react';
import Nav from './Nav';
import JudgingForm from './JudgingForm';
import BeerList from './BeerList';
import Footer from './Footer';

function Home() {
  return (
    <div className="bg-gray-800">
      <Nav />
      <Weeklybeer />
      <BeerList />
      <Footer />
    </div>
  );
}

export default Home;

{
  /* <JudgingForm /> */
}
