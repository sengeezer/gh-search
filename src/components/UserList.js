import React from 'react';
import User from './User';

const UserList = ({ users, onUserSelect }) => {
  const userList = users.map(user => (
      <User user={user} onUserSelect={onUserSelect} key={user.id} />
    )
  );

  return (
    <div className="ui relaxed divided list">
      {userList}
    </div>
  );
};

export default UserList;
