import React from 'react';
import './User.scss';

const User = ({ user, onUserSelect }) => {
  return (
    <div
      onClick={() => onUserSelect(user)}
      className="item user"
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        className="ui image"
      />
      <div className="content">
        <div className="header">{user.login}</div>
        <div className="description">{user.score}</div>
      </div>
    </div>
  );
};

export default User;
