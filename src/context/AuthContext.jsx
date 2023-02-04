import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
// context overview
// In React, context is a way to share data that can be considered "global" for a tree of React components, without having to pass the data down through props at every level.

// A React context is created using the createContext method, and it can be accessed within a component using the useContext hook or the Context.Consumer component. The data that is shared via context is specified as the value prop of a Context.Provider component, which is placed higher up in the component tree.

// Context is often used for values that are considered "global" for an application, such as the currently authenticated user, the theme, or the language. By using context, you can avoid having to pass the same data down through many levels of nested components via props.

// code breakdown
// This code defines a React context for authentication. The AuthContextProvider component provides the context with values for the current user, functions for creating a user, signing in, and signing out, and a useEffect hook that listens to changes in the authentication state.

// createContext is used to create the UserContext object, which is used to share data across multiple components in the React app.

// useState is used to manage the state of the current user, initially an empty object.

// useEffect is used to listen to changes in the authentication state using the onAuthStateChanged function, which is a Firebase Auth API. It sets the current user in the state whenever the authentication state changes.

// createUser, signIn, and logout functions use the respective Firebase Auth API functions to perform user authentication actions.

// The UserAuth component uses the useContext hook to access the values from the UserContext object.

// Finally, the AuthContextProvider component wraps the children components with the UserContext.Provider, providing the values for the context.