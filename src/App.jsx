import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { BeerContextProvider } from './context/BeerContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BeerContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            ></Route>

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BeerContextProvider>
      </AuthContextProvider>
    </div>
  );
}
export default App;
