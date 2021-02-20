import React from 'react';
import User from './User';
import { useSelector } from 'react-redux';
import { getUsers } from '../../selectors/userSelectors';

const UserList = () => {
  const users = useSelector(getUsers);

  const userElements = users.map((user) => (
    <li key={user.username}>
      <User {...user} />
    </li>
  ));

  return <ul>{userElements}</ul>;
};

export default UserList;
