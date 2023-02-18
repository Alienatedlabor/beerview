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
import { UserAuth } from '../context/AuthContext';

const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {
  const { user } = UserAuth();
  const [users, setUsers] = useState([]);
  const addUser = async (user) => {
    await addDoc(collection(db, 'users'), user);
  };
  return (
    <UserDataContext.Provider value={{ addUser, users }}>
      {children}
    </UserDataContext.Provider>
  );
};
