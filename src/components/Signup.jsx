// imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

// component
const Signup = () => {
  // state for email and passwords, as well as errors.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className="max-w[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">
          Sign up for beerview for free!
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3"
            type="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3"
            type="password"
          />
        </div>
        <button className="border border-yellow-500 bg-yellow-500 hover:bg-yellow-600 w-full p-4 my-2 font-semibold">
          Sign Up
        </button>
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
