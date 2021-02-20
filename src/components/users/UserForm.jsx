import React, { useState } from 'react';
import { findUser } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../selectors/userSelectors';

const UserForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  const [username, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(findUser({ username, followers, following, url, users }));
    setUserName('');
    setFollowers('');
    setFollowing('');
    setUrl('');
  };

  return (
    <>
      <h1>GITHUB USER</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={({ target }) => setUserName(target.value)}
        />
      </form>
    </>
  );
};

export default UserForm;
