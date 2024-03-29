import { increment } from 'firebase/firestore';
import { useBeers } from '../context/BeerContext';
import { UserAuth } from '../context/AuthContext';
import AddJudgmentModal from './AddJudgmentModal';
import { useState } from 'react';
import RatingPreview from './RatingPreview';

const BeerPreview = ({ beer }) => {
  const { user, updateUser } = UserAuth();
  const { deleteBeer, updateBeer } = useBeers();
  const [open, setOpen] = useState(false);

  //optional chaining: ?. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining checks if property exists, short circuits if not
  const hasVoted = beer?.usersWhoHaveVoted?.includes(user.uid);
  console.log(beer.ratings);
  const hasRated = beer?.usersWhoHaveRated?.includes(user.uid);
  const handleVote = () => {
    if (hasVoted) {
      return;
    }
    //making sure that usersWhoHaveVoted won't be undefined for beers that have no votes.
    const usersWhoHaveVoted = beer.usersWhoHaveVoted || [];

    usersWhoHaveVoted.push(user.uid);

    updateBeer(beer.id, {
      voteCount: increment(1),
      usersWhoHaveVoted,
    });
    updateUser(user.uid, {
      hasVoted: true,
    });
  };

  return (
    <div className="mx-4 my-2 flex flex-col">
      <AddJudgmentModal
        beer={beer}
        open={open}
        onClose={() => setOpen(false)}
      />

      <h2 className="font-bold text-black">{beer.name}</h2>
      <div className="flex gap-1">
        <label>Brewery: </label>
        <p className=" font-medium text-black">{beer.brewery}</p>
      </div>
      <div className="flex gap-1">
        <label>Style: </label>
        <p className=" font-medium text-black">{beer.style}</p>
      </div>
      <div className="flex gap-1">
        <label>Alcohol by Volume: </label>
        <p className=" font-medium text-black">{beer.abv}%</p>
      </div>
      <h3 className="font-bold">
        {beer.upForVote === true ? `Votes: ${beer.voteCount}` : ''}
      </h3>

      <RatingPreview ratings={beer.ratings} />

      {beer.hasRating &&
        beer.ratings?.map((rate) => (
          <div className="my-2 flex flex-col" key={user.uid + beer.id}>
            <p>Appearance: {rate.appearance}</p>
            <p>Smell: {rate.smell}</p>
            <p>Taste: {rate.taste}</p>
            <p>Aftertaste: {rate.aftertaste}</p>
            <p>Drinkability: {rate.drinkability}</p>
            <p>Comments: {rate.comment}</p>
            <p>Rated by: {rate.ratedBy}</p>
          </div>
        ))}

      {user.uid == beer.owner && beer.upForVote && (
        <button
          onClick={() => deleteBeer(beer.id, beer.owner)}
          className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600"
        >
          Delete this entry
        </button>
      )}

      {!beer.hasRating && beer.upForVote && (
        <button
          disabled={hasVoted}
          onClick={handleVote}
          className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600"
        >
          {hasVoted ? "You've already voted!" : 'Vote for this entry'}
        </button>
      )}

      {
        // !beer.hasRating  &&
        beer.upForRating && (
          <button
            disabled={hasRated}
            onClick={() => setOpen(true)}
            className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600"
          >
            {hasRated ? "You've already rated this beer!" : 'Rate this beer'}
          </button>
        )
      }
    </div>
  );
};

export default BeerPreview;
// TODO: need a delete that deletes only the current user's rating field.
// TODO: hasRated on user as array of beer ids they have rated added on rating form submit- array on beer that adds user id, maybe also
