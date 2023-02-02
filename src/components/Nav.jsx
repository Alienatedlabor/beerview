import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="flex justify-between px-3 py-4 bg-yellow-500">
      <img src="" alt="logoimage" />
      <h1 className="text-center text-3xl font-bold">Brewview</h1>
      <nav className="place-content-">
        <Link to="/account" className="underline">
          Account
        </Link>
      </nav>
    </div>
  );
}

export default Nav;

//TODO: upload logo image?
