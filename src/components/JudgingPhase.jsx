import { updatePhoneNumber } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useBeers } from '../context/BeerContext';
import BeerPreview from './BeerPreview';

function JudgingPhase() {
  const navigate = useNavigate();
  const [highestVoted, setHighestVoted] = useState([]);

  const { beers, updateBeer } = useBeers();
  const { userList } = UserAuth();

  // TODO: change this for judgingFinished
  // useEffect(() => {
  //   if (votingFinished === true) {
  //     navigate('/judgingphase');
  //   }
  // }, [votingFinished, navigate]);

  const getHighestVoteCountBeer = () => {
    let maxVoteCount = 0;
    let beersWithMaxVoteCount = [];

    beers.forEach((beer) => {
      if (beer.voteCount > maxVoteCount) {
        maxVoteCount = beer.voteCount;
        beersWithMaxVoteCount = [beer];
      } else if (beer.voteCount === maxVoteCount) {
        beersWithMaxVoteCount.push(beer);
      }
    });

    return beersWithMaxVoteCount;
  };

  useEffect(() => {
    setHighestVoted(getHighestVoteCountBeer);
    highestVoted.forEach((beer) => {
      updateBeer(beer.id, {
        upForRating: true,
      });
    });
  }, [beers]);

  useEffect(() => {
    beers.forEach((beer) =>
      updateBeer(beer.id, {
        upForVote: false,
      })
    );
  }, []);
  return (
    <div className="py-33 flex flex-col justify-center bg-gray-800 px-8">
      <h1 className="flex items-center justify-center text-white">
        Beers up for rating:
      </h1>

      <div className=" flex items-center justify-center  bg-gray-300  p-48">
        <div className="container mx-auto grid grid-cols-5 items-center justify-center gap-4">
          {!!highestVoted.length &&
            highestVoted.map((beer) => (
              <BeerPreview key={beer.id} beer={beer} />
            ))}
        </div>
      </div>
    </div>
  );
}
export default JudgingPhase;

//TODO: upForVote must be toggled to false on pageload- this will change the appearance of the BeerPreview
