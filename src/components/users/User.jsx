import React from 'react';
import PropTypes from 'prop-types';

const User = ({ username, followers, following, url }) => {
  return (
    <>
      <dl>
        <dt>{username}</dt>
        <dd>{followers}</dd>
        <dd>{following}</dd>
        <dd>{url}</dd>
      </dl>
    </>
  );
};

User.propTypes = {
  username: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default User;
