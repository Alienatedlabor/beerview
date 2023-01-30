import React from 'react';

function Weeklybeer() {
  return (
    <div>
      Weeklybeer;
      <div>
        <input className="border" placeholder="Search for a beer" type="text" />
      </div>
      <div>
        <h1>This week's beer:</h1>
        <div className="weekly-beer-container"></div>
      </div>
    </div>
  );
}

export default Weeklybeer;
