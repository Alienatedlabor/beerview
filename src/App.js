import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Sign in or Sign up!</h1>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}
export default App;
