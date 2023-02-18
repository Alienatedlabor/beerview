import { createContext, useContext, useEffect, useState } from 'react';
import {
  getDocs,
  collection,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../firebase';
const BeerContext = createContext();

export const BeerContextProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);

  const addBeer = async (beer) => {
    await addDoc(collection(db, 'beers'), beer);
  };

  const deleteBeer = async (id) => {
    await deleteDoc(doc(db, 'beers', id));
  };

  const updateBeer = async (id, beer) => {
    await updateDoc(doc(db, 'beers', id), beer);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'beers'), (snapshot) => {
      const beers = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBeers(beers);
    });

    return () => unsubscribe();
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
