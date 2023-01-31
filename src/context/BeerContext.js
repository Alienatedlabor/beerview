import { createContext, useContext, useEffect, useState } from 'react';
import { getBeers } from '../firebase';

const BeerContext = createContext();

export const BeerContextProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeers().then((beers) => setBeers(beers));
  }, []);
  return (
    <BeerContext.Provider value={{ beers }}>{children}</BeerContext.Provider>
  );
};

export const useBeers = () => {
  const context = useContext(BeerContext);
  return context;
};
