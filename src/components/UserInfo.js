import React from 'react';

const UserInfo = ({ user }) => {
  if (!user) {
    return (
      <div className="ui placeholder segment">
        {/* Please make a selection */}
      </div>
    );
  }

  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{user.name}</h4>
        <div className="ui list">
          <div className="item">
            <div className="header">
              Username
            </div>
            {user.login}
          </div>
          <div className="item">
            <div className="header">
              Location
            </div>
            {user.location}
          </div>
          <div className="item">
            <div className="header">
              Bio
            </div>
            {user.bio}
          </div>
          <div className="item">
            <div className="header">
              Followers
            </div>
            {user.followers}
          </div>
          <div className="item">
            <div className="header">
              Repos
            </div>
            {user.public_repos}
          </div>
          <div className="item">
            <div className="header">
              Gists
            </div>
            {user.public_gists}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
