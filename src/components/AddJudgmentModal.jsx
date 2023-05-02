import { useState } from 'react';
import { Entry } from './Entry';
import { useBeers } from '../context/BeerContext';
import { UserAuth } from '../context/AuthContext';

function JudgingForm({ beer, onClose }) {
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

    if (beer.usersWhoHaveRated?.includes(user.uid)) return;

    updateBeer(beer.id, {
      ...beer,
      hasRating: true,
      usersWhoHaveRated: [...(beer.usersWhoHaveRated || []), user.uid],

      ratings: [
        ...(beer.ratings || []),
        {
          appearance: appearanceScore,
          smell: smellScore,
          taste: tasteScore,
          aftertaste: aftertasteScore,
          drinkabilityScore: drinkabilityScore,
          comment: comment,
          ratedBy: user.displayName,
          uid: user.uid,
        },
      ],
    });

    console.log(beer.usersWhoHaveRated);
    setAftertasteScore(0);
    setAppearanceScore(0);
    setSmellScore(0);
    setDrinkabilityScore(0);
    setTasteScore(0);
    setComment('');
    onClose();
  };

  return (
    <div className="flex flex-col ">
      <h2 className="font-bold">Beer: {beer.name}</h2>
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

export default function AddJudgmentModal({ beer, open, onClose }) {
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
        <JudgingForm beer={beer} onClose={onClose} />
      </div>
    </div>
  );
}

// TODO: usersWhoHaveRated is being overwritten with each rating, fix that. either spread or find another way- knoten mentioned arrayunion arrayremove
//TODO: make function to total score and store as overallScore for both individual scores and each score averaged.
//TODO: form needs min/max properties to prevent voting outside the point value range
