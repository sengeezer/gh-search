import React from 'react';

const ViewModeSwitch = () => {
  return (
    <div class="ui compact menu">
      <a class="item">
        <i class="gamepad icon"></i>
        Games
      </a>
      <a class="item">
        <i class="video camera icon"></i>
        Channels
      </a>
      <a class="item">
        <i class="video play icon"></i>
        Videos
      </a>
    </div>
  );
};

export default ViewModeSwitch;
