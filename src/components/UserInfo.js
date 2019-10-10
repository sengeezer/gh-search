import React from 'react';

const UserInfo = ({ user }) => {
  if (!user) {
    return (
      <div className="ui segment">
        {/* Please make a selection */}
      </div>
    );
  }

  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{user.name}</h4>
        <p>{user.login}</p>
        <p>{user.location}</p>
      </div>
    </div>
  );
};

export default UserInfo;
