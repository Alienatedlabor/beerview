import { createContext, useContext, useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
const BeerContext = createContext();

//collections

export const BeerContextProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);
  const getBeers = async () => {
    let beers = [];
    try {
      const beersCollection = await getDocs(collection(db, 'beers'));
      beers = beersCollection.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    } catch (err) {
      console.error(err);
    }
    return beers;
  };
  console.log(beers);
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
