import { React, useState } from 'react';
import AddBeerModal from './AddBeerModal';

// Each beer is added to the database through the add for voting form-
// they have an empty Ratings array object to begin

function Weeklybeer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-33 flex flex-col justify-center bg-gray-800 px-8 text-white">
      <h1 className="flex items-center justify-center">Vote for a beer:</h1>
      {/* <div>
        <input className="border" placeholder="Search for a beer" type="text" />
      </div> */}

      <AddBeerModal open={open} onClose={() => setOpen(false)} />

      <div className="flex h-64 items-center justify-center bg-gray-300">
        <div className="container mx-auto"></div>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600 "
      >
        Add Beer for Voting
      </button>
    </div>
  );
}

export default Weeklybeer;
