import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  deleteUser,
} from 'firebase/auth';
import { auth, db } from '../firebase';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState([]);

  const createUser = (email, password, displayName) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userData) => {
        const user = userData.user;
        return updateProfile(user, {
          displayName: displayName,
        }).then(
          setDoc(doc(db, 'users', user.uid), {
            username: displayName,
          })
        );
      }
    );
  };

  const updateUser = async (uid, updateData) => {
    let docRef = doc(db, 'users', uid);
    await updateDoc(docRef, updateData);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const userDelete = async (user) => {
    await deleteUser(user)
      .then(() => {
        alert(`user has been deleted`);
      })
      .catch((error) => {
        console.log(error);
        alert(
          'There was an issue deleting, contact administrator to ensure deletion'
        );
      });
  };

  // const getUserList = async () => {
  //   const querySnapshot = await getDocs(collection(db, 'users'));
  //   const userList = querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  //   return userList;
  // };

  // const getUserData = async (uid) => {
  //   const userRef = doc(db, 'users', uid);
  //   const querySnapshot = await getDoc(userRef);
  //   const userData = querySnapshot.data();
  //   console.log(userData);
  //   return userData;
  // };

  const deleteUserData = async (uid) => {
    await deleteDoc(doc(db, 'users', uid));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserList(users);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        logout,
        signIn,
        userDelete,
        deleteUserData,
        updateUser,
        getUserList,
        getUserData,
        userList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};

// context overview (chatGPT)
// In React, context is a way to share data that can be considered "global" for a tree of React components, without having to pass the data down through props at every level.

// A React context is created using the createContext method, and it can be accessed within a component using the useContext hook or the Context.Consumer component. The data that is shared via context is specified as the value prop of a Context.Provider component, which is placed higher up in the component tree.

// Context is often used for values that are considered "global" for an application, such as the currently authenticated user, the theme, or the language. By using context, you can avoid having to pass the same data down through many levels of nested components via props.

// code breakdown(chatGPT)
// This code defines a React context for authentication. The AuthContextProvider component provides the context with values for the current user, functions for creating a user, signing in, and signing out, and a useEffect hook that listens to changes in the authentication state.

// createContext is used to create the UserContext object, which is used to share data across multiple components in the React app.

// useState is used to manage the state of the current user, initially an empty object.

// useEffect is used to listen to changes in the authentication state using the onAuthStateChanged function, which is a Firebase Auth API. It sets the current user in the state whenever the authentication state changes.

// createUser, signIn, and logout functions use the respective Firebase Auth API functions to perform user authentication actions.

// The UserAuth component uses the useContext hook to access the values from the UserContext object.

// Finally, the AuthContextProvider component wraps the children components with the UserContext.Provider, providing the values for the context.
