import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="max-w[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">
          Sign up for beerview for free!
        </h1>
      </div>

      <form>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input className="border p-3" type="email" />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2font-medium">Password</label>
          <input className="border p-3" type="password" />
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
