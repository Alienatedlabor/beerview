import { createContext, useContext, useEffect, useState } from 'react';
import {
  getDocs,
  collection,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
const BeerContext = createContext();

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
    setBeers(beers);
  };

  const addBeer = async (beer) => {
    await addDoc(collection(db, 'beers'), beer);

    getBeers();
  };

  const deleteBeer = async (id) => {
    await deleteDoc(doc(db, 'beers', id));

    getBeers();
  };

  const updateBeer = async (id, beer) => {
    await updateDoc(doc(db, 'beers', id), beer);

    getBeers();
  };

  useEffect(() => {
    getBeers();
  }, []);
  return (
    <BeerContext.Provider value={{ deleteBeer, addBeer, updateBeer, beers }}>
      {children}
    </BeerContext.Provider>
  );
};

export const useBeers = () => {
  const context = useContext(BeerContext);
  return context;
};
