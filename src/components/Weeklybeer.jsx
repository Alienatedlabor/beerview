import { async } from '@firebase/util';
import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useBeers } from '../context/BeerContext';
import AddBeerModal from './AddBeerModal';
import BeerPreview from './BeerPreview';
import Checkboxes from './Checkboxes';
// Each beer is added to the database through the add for voting form-
// they have an empty Ratings array object to begin

function Weeklybeer() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [votingFinished, setVotingFinished] = useState(false);

  const { beers } = useBeers();
  const { userList } = UserAuth();

  useEffect(() => {
    if (userList.length === 0) return;

    const allHaveFinishedVoting = userList.every(
      (u) => u.finishedVoting === true && u.hasVoted === true
    );

    setVotingFinished(allHaveFinishedVoting);
    console.log(allHaveFinishedVoting);
    console.log(votingFinished);
  }, [userList, votingFinished]);

  useEffect(() => {
    if (votingFinished) {
      navigate('/judgingphase');
    }
  }, [votingFinished, navigate]);

  return (
    <div className="py-33 flex flex-col justify-center bg-gray-800 px-8">
      <h1 className="flex items-center justify-center text-white">
        Vote for a beer:
      </h1>

      <AddBeerModal open={open} onClose={() => setOpen(false)} />

      <div className=" flex items-center justify-center  bg-gray-300  p-48">
        <div className="container mx-auto grid grid-cols-5 items-center justify-center gap-4">
          {beers.map(
            (beer) =>
              beer.upForVote && <BeerPreview key={beer.id} beer={beer} />
          )}
        </div>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600 "
      >
        Add Beer for Voting
      </button>
      <Checkboxes />
    </div>
  );
}

export default Weeklybeer;
