import React from 'react';

const ViewModeSwitch = () => {
  return (
    <div class="ui compact menu">
      <a class="item active">
        <i class="gamepad icon"></i>
        List
      </a>
      <a class="item">
        <i class="video camera icon"></i>
        Repos
      </a>
      <a class="item">
        <i class="video play icon"></i>
        Subscribers
      </a>
    </div>
  );
};

export default ViewModeSwitch;
