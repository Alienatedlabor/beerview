import { increment } from 'firebase/firestore';
import { useBeers } from '../context/BeerContext';
import { UserAuth } from '../context/AuthContext';

const BeerPreview = ({ beer }) => {
  const { user } = UserAuth();
  const { deleteBeer, updateBeer } = useBeers();

  const handleVote = () => {
    console.log(user.uid);
    console.log(beer.usersWhoHaveVoted);
    if (beer.usersWhoHaveVoted.includes(user.uid)) {
      return;
    }
    updateBeer(beer.id, {
      voteCount: increment(1),
      usersWhoHaveVoted: [...beer.usersWhoHaveVoted, user.uid],
    });
  };

  // usersWhoHaveVoted is being stored as a string, I believe that is why the if block/includes method doesn't work

  return (
    <div className="mx-4 my-2 flex flex-col">
      <h2 className="font-bold text-black">{beer.name}</h2>
      <div className="flex gap-1">
        <label htmlFor="">Brewery: </label>
        <p className=" font-medium text-black">{beer.brewery}</p>
      </div>
      <div className="flex gap-1">
        <label htmlFor="">Style: </label>
        <p className=" font-medium text-black">{beer.style}</p>
      </div>
      <div className="flex gap-1">
        <label htmlFor="">Alcohol by Volume: </label>
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
          onClick={handleVote}
          className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600"
        >
          Vote for this entry
        </button>
      )}
    </div>
  );
};

export default BeerPreview;
