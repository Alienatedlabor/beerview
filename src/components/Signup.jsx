// imports
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Entry } from './Entry';

// component
const Signup = () => {
  // state for email and passwords, as well as errors.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password, displayName);
      navigate('/');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className="max-w[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="py-2 text-2xl font-bold">
          Sign up for beerview for free!
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3"
            type="email"
          />
        </div>

        <div className="flex flex-col py-2">
          <label className="py-2font-medium">Password</label>
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3"
            type="password"
          />
        </div>

        <div className="flex flex-col py-2">
          <label className='"py-2font-medium"'>Display Name</label>
          <input
            required
            className="border p-3"
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>

        <button className="my-2 w-full border border-yellow-500 bg-yellow-500 p-4 font-semibold hover:bg-yellow-600">
          Sign Up
        </button>
        <span className=" border-red-800 p-2 text-red-800">{error}</span>
      </form>
      <p className="py-2">
        Already have an account?{' '}
        <Link to="/" className="underline">
          Sign in.
        </Link>
      </p>
    </div>
  );
};

export default Signup;

//TODO: no duplicate display names
