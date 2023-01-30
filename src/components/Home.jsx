import Weeklybeer from './Weeklybeer';
import React from 'react';
import Nav from './Nav';
import JudgingForm from './JudgingForm';
function Home() {
  return (
    <div>
      <Nav />
      <Weeklybeer />
      <JudgingForm />
    </div>
  );
}

export default Home;

// TODO: add a link with which will call navigate('/account')
