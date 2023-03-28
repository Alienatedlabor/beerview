import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useBeers } from '../context/BeerContext';
import AddJudgmentModal from './AddJudgmentModal';
// TODO: BeerPreview vote button stays but is altered to open rating modal for that beer specifically if I go with a many beers rating system
import BeerPreview from './BeerPreview';

function JudgingPhase() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { beers } = useBeers();
  const { userList } = UserAuth();

  // TODO: change this for judgingFinished
  // useEffect(() => {
  //   if (votingFinished === true) {
  //     navigate('/judgingphase');
  //   }
  // }, [votingFinished, navigate]);

  const getVoteCount = () => {
    const votecountArray = [];
    beers.forEach((beer) => {
      votecountArray.push(beer.voteCount);
    });
  };
  getVoteCount();

  return (
    <div className="py-33 flex flex-col justify-center bg-gray-800 px-8">
      <h1 className="flex items-center justify-center text-white">
        Beers up for rating:
      </h1>

      <AddJudgmentModal open={open} onClose={() => setOpen(false)} />

      <div className=" flex items-center justify-center  bg-gray-300  p-48">
        <div className="container mx-auto grid grid-cols-5 items-center justify-center gap-4">
          // TODO: figure out vote threshold and how many beers to rate
          {beers.map(
            (beer) =>
              beer.voteCount >= userList.length / 2 && (
                <BeerPreview key={beer.id} beer={beer} />
              )
          )}
        </div>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600 "
      >
        Rate Beer
      </button>
    </div>
  );
}
export default JudgingPhase;

//TODO: upForVote must be toggled to false on pageload- this will change the appearance of the BeerPreview
