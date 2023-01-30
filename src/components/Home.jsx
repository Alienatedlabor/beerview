import Weeklybeer from './Weeklybeer';
import React from 'react';
import Nav from './Nav';

function Home() {
  return (
    <div>
      <Nav />
      <Weeklybeer />
    </div>
  );
}

export default Home;

// TODO: add a link with which will call navigate('/account')
