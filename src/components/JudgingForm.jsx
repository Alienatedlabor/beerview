import React from 'react';
const Entry = ({ label, pointValue }) => {
  return (
    <div className="flex gap-2">
      <label className="font-medium">
        {label} ({pointValue}):
      </label>
      <input className="my-1 border" placeholder={label}></input>
    </div>
  );
};

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
      <button className="border px-6 py-2 my-4 bg-yellow-500 hover:bg-yellow-600">
        Submit
      </button>
    </div>
  );
}

export default JudgingForm;
