import { increment } from 'firebase/firestore';
import { useBeers } from '../context/BeerContext';
import { UserAuth } from '../context/AuthContext';

const BeerPreview = ({ beer }) => {
  const { user } = UserAuth();
  const { deleteBeer, updateBeer } = useBeers();
  const hasVoted = beer?.usersWhoHaveVoted?.includes(user.uid);
  const handleVote = () => {
    if (hasVoted) {
      return;
    }
    const usersWhoHaveVoted = beer.usersWhoHaveVoted || [];

    usersWhoHaveVoted.push(user.uid);

    updateBeer(beer.id, {
      voteCount: increment(1),
      usersWhoHaveVoted,
    });
  };

  return (
    <div className="mx-4 my-2 flex flex-col">
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

      {beer.hasRating &&
        beer.rating.map((rate) => (
          <div key={beer.id}>
            <p>Appearance: {rate.appearance}</p>
            <p>Smell: {rate.smell}</p>
            <p>Taste: {rate.taste}</p>
            <p>Aftertaste: {rate.aftertaste}</p>
            <p>Drinkability: {rate.drinkability}</p>
          </div>
        ))}

      <button
        onClick={() => deleteBeer(beer.id)}
        className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600"
      >
        Delete this entry
      </button>

      {!beer.hasRating && (
        <button
          disabled={hasVoted}
          onClick={handleVote}
          className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600"
        >
          {hasVoted ? "You've already voted!" : 'Vote for this entry'}
        </button>
      )}
    </div>
  );
};

export default BeerPreview;
