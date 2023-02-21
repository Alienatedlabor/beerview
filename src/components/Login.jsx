import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="max-w[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="py-2 text-2xl font-bold">Sign in to your account</h1>
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
        <button className="my-2 w-full border border-yellow-500 bg-yellow-500 p-4 font-semibold hover:bg-yellow-600">
          Sign In
        </button>
        <span className=" border-red-800 p-2 text-red-800">{error}</span>
      </form>
      <p className="py-2">
        Don't have an account?{' '}
        <Link to="/signup" className="underline">
          Sign up!
        </Link>
      </p>
    </div>
  );
};

export default Login;

//TODO: add loadingState animation
