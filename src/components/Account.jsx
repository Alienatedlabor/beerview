import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';

const Account = () => {
  const { user, logout, userDelete, deleteUserData } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleAccountDeletion = async () => {
    const userProvidedPassword = prompt(
      'confirm deletion by entering your password'
    );
    try {
      const credential = EmailAuthProvider.credential(
        user.email,
        userProvidedPassword
      );
      await reauthenticateWithCredential(user, credential);
      await deleteUserData(user.uid);
      await userDelete(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto my-16 max-w-[600px] p-4">
      <h1 className="py-4 text-2xl font-bold">Account</h1>
      <p>Email: {user && user.email}</p>
      <p>Display Name: {user && user.displayName}</p>
      <button
        onClick={handleLogout}
        className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600"
      >
        Log out
      </button>
      <button
        onClick={handleAccountDeletion}
        className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600"
      >
        Delete Account and All User Data
      </button>
      <p>
        {' '}
        <Link to="/" className="underline">
          Back to the homepage
        </Link>
      </p>
    </div>
  );
};

export default Account;
