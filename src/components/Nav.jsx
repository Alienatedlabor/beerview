import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="flex justify-between bg-yellow-500 px-3 py-4">
      <img className="h-16" src="src/assets/logo.webp" alt="logoimage" />
      <h1 className="justify-center text-center text-3xl font-bold">
        Brewview
      </h1>
      <nav className="place-content">
        <Link to="/account" className="underline hover:text-white">
          Account
        </Link>
      </nav>
    </div>
  );
}

export default Nav;

//TODO: upload logo image?
