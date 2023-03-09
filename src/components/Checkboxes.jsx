import React, { useState } from 'react';
import { Entry } from './Entry';
import { UserAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const Checkboxes = () => {
  const [userList, setUserList] = useState([]);
  const [checked, setChecked] = useState(false);
  const { getUserList, user, updateUser } = UserAuth();
  const handleCheck = (isChecked) => {
    setChecked(isChecked);
    console.log(isChecked);
    //check doesnt work and also I think it's backwards- I need value of databse to determine value of isChecked, I think

    if (isChecked === true) {
      updateUser(user.uid, {
        finishedVoting: true,
      });
      if (isChecked === false) {
        updateUser(user.uid, {
          finishedVoting: false,
        });
      }
    }
  };

  useEffect(() => {
    // runs getUserList and passes the result to the state
    getUserList().then(setUserList);
  }, []);

  return (
    <div className="mx-1 my-4 flex justify-center gap-6 ">
      {userList.map((u) => (
        <div key={u.id} className="flex justify-center ">
          <Entry
            label={u.username}
            type="checkbox"
            onChange={(e) => handleCheck(e.target.checked)}
            disabled={user.uid !== u.id}
            value={checked}
          />
        </div>
      ))}
    </div>
  );
};
export default Checkboxes;
