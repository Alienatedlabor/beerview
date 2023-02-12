import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Account</h1>
      <p>Email: {user && user.email}</p>
      <button
        onClick={handleLogout}
        className="border px-6 py-2 my-4 bg-yellow-500 hover:bg-yellow-600"
      >
        Log out
      </button>
      <p>
        {' '}
        <Link to="/home" className="underline">
          Back to the homepage
        </Link>
      </p>
    </div>
  );
};

export default Account;
