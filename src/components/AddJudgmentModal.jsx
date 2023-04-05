import { useState } from 'react';
import { Entry } from './Entry';
import { useBeers } from '../context/BeerContext';
import { UserAuth } from '../context/AuthContext';
import app from '../firebase';

function JudgingForm() {
  const { updateBeer } = useBeers();
  const { user, updateUser } = UserAuth();
  const [appearanceScore, setAppearanceScore] = useState(0);
  const [smellScore, setSmellScore] = useState(0);
  const [tasteScore, setTasteScore] = useState(0);
  const [aftertasteScore, setAftertasteScore] = useState(0);
  const [drinkabilityScore, setDrinkabilityScore] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBeer({});
  };

  return (
    <div className="flex flex-col ">
      <h2 className="font-bold">Beer: placeholder</h2>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <Entry
          value={appearanceScore}
          onChange={(e) => {
            setAppearanceScore(e.target.value);
          }}
          label={'Appearance'}
          pointValue={10}
        />
        <Entry
          value={smellScore}
          onChange={(e) => {
            setSmellScore(e.target.value);
          }}
          label={'Smell'}
          pointValue={10}
        />
        <Entry
          value={tasteScore}
          onChange={(e) => {
            setTasteScore(e.target.value);
          }}
          label={'Taste'}
          pointValue={30}
        />
        <Entry
          value={aftertasteScore}
          onChange={(e) => {
            setAftertasteScore(e.target.value);
          }}
          label={'Aftertaste'}
          pointValue={20}
        />
        <Entry
          value={drinkabilityScore}
          onChange={(e) => {
            setDrinkabilityScore(e.target.value);
          }}
          label={'Drinkability'}
          pointValue={30}
        />
        <Entry
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          label={'Comments'}
          style={{ padding: 40 + 'px' }}
        />
        <button className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600">
          Submit
        </button>
      </form>
    </div>
  );
}
export default function AddJudgmentModal({ open, onClose }) {
  return (
    <div className={`fixed inset-0 ${open ? '' : 'pointer-events-none'}`}>
      {/* backdrop */}
      <div
        className={`fixed inset-0 bg-black ${
          open ? 'opacity-50' : 'pointer-events-none opacity-0'
        } transition-opacity duration-300 ease-in-out`}
      />

      {/* content */}
      <div
        className={`fixed right-0 h-full w-full max-w-screen-sm bg-white p-4 shadow-lg${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        } transition-opacity duration-300 ease-in-out`}
      >
        <div>
          <button
            className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600  "
            onClick={onClose}
          >
            Click to close
          </button>
        </div>
        <JudgingForm onClose={onClose} />
      </div>
    </div>
  );
}

// TODO: get form submitting ratings after voting system is finished
//TODO: add comments field to beer/rating
