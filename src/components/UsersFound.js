import React from 'react';

const UsersFound = ({ usersFound }) => {
  if (usersFound === 0) {
    return <div className="ui warning message">No users found</div>;
  } else if (usersFound > 0) {
    return <div className="ui message">Number of users found: {usersFound}</div>;
  }

  return <div></div>;
};

export default UsersFound;
