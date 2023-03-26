import React from 'react';
import { Entry } from './Entry';
import { UserAuth } from '../context/AuthContext';

const Checkboxes = () => {
  const { user, updateUser, userList } = UserAuth();

  const handleCheck = (value) => {
    updateUser(user.uid, {
      finishedVoting: value,
    });
  };

  const isVotingFinished = () => {
    const allVoted = userList.every((u) => u.finishedVoting && u.hasVoted);
    return allVoted;
  };

  return (
    <div className="mx-1 my-4 flex justify-center gap-6 ">
      {userList.map((u) => (
        <div key={u.id} className="flex justify-center ">
          <Entry
            label={u.username}
            type="checkbox"
            onChange={(e) => handleCheck(e.target.checked)}
            disabled={user.uid !== u.id || !u.hasVoted}
            value={u.finishedVoting}
          />
        </div>
      ))}
    </div>
  );
};
export default Checkboxes;
