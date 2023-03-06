import React, { useState } from 'react';
import { Entry } from './Entry';
import { UserAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const Checkboxes = () => {
  const [userList, setUserList] = useState([]);
  const { getUserList } = UserAuth();
  const handleClick = () => {};
  useEffect(() => {
    getUserList().then(setUserList);
  }, []);
  return (
    <div className="mx-1 my-4 flex justify-center gap-6 ">
      {userList.map((user) => (
        <div className="flex justify-center ">
          <Entry label={user.username} type="checkbox" onChange={handleClick} />
        </div>
      ))}
    </div>
  );
};
export default Checkboxes;
