import { useState } from 'react';
import { useBeers } from '../context/BeerContext';
import { Entry } from './Entry';
import { UserAuth } from '../context/AuthContext';

const ModalForm = ({ onClose }) => {
  const [beerName, setBeerName] = useState('');
  const [beerBrewery, setBeerBrewery] = useState('');
  const [beerStyle, setBeerStyle] = useState('');
  const [beerABV, setBeerABV] = useState(0);
  const { addBeer } = useBeers();
  const { user } = UserAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    addBeer({
      name: beerName,
      brewery: beerBrewery,
      abv: beerABV,
      style: beerStyle,
      hasRating: false,
      iconurl: '',
      upForVote: true,
      voteCount: 0,
      rating: [
        { aftertaste: 0, appearance: 0, drinkability: 0, smell: 0, taste: 0 },
      ],
    });
    onClose();
  };

  return (
    <div className="flex flex-col justify-center">
      <form onSubmit={handleSubmit}>
        <Entry
          value={beerName}
          onChange={(e) => {
            setBeerName(e.target.value);
          }}
          type="text"
          label="Name"
        />
        <Entry
          value={beerBrewery}
          onChange={(e) => {
            setBeerBrewery(e.target.value);
          }}
          type="text"
          label="Brewery"
        />
        <Entry
          value={beerStyle}
          onChange={(e) => {
            setBeerStyle(e.target.value);
          }}
          type="text"
          label="Style"
        />
        <Entry
          value={beerABV}
          onChange={(e) => {
            setBeerABV(Number(e.target.value));
          }}
          type="number"
          label="ABV"
        />

        <button
          type="submit"
          className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default function AddBeerModal({ open, onClose }) {
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
        <ModalForm onClose={onClose} />
      </div>
    </div>
  );
}
