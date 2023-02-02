import React from 'react';
import { Entry } from './Entry';

function JudgingForm() {
  return (
    <div className="flex flex-col ">
      <h2 className="font-bold">Beer: placeholder</h2>
      <form className="flex flex-col ">
        <Entry label={'Appearance'} pointValue={10} />
        <Entry label={'Smell'} pointValue={10} />
        <Entry label={'Taste'} pointValue={30} />
        <Entry label={'Aftertaste'} pointValue={20} />
        <Entry label={'Drinkability'} pointValue={30} />
      </form>
      <button className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600">
        Submit
      </button>
    </div>
  );
}

export default JudgingForm;
