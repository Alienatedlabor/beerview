import { createContext, useContext, useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
const BeerContext = createContext();

//collections

export const BeerContextProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);
  const getBeers = async () => {
    const beers = [];
    const beersCollection = await getDocs(collection(db, 'beers'));

    beersCollection.forEach((beer) => beers.push(beer.data()));
    return beers;
  };

  useEffect(() => {
    getBeers().then((beers) => setBeers(beers));
  }, []);
  return (
    <BeerContext.Provider value={{ beers, getBeers }}>
      {children}
    </BeerContext.Provider>
  );
};

export const useBeers = () => {
  const context = useContext(BeerContext);
  return context;
};
