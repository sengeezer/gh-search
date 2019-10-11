import React from 'react';

const ViewModeSwitch = ({ selectedView }) => {
  const viewType = selectedView;

  return (
    <div class="ui compact menu">
      <a class={`item${viewType === 'plainList' ? ' active' : ''}`}>
        <i class="align justify icon"></i>
        Plain List
      </a>
      <a class={`item${viewType === 'list' ? ' active' : ''}`}>
        <i class="list icon"></i>
        List
      </a>
      <a class="item">
        <i class="list ol icon"></i>
        Numbered List
      </a>
    </div>
  );
};

export default ViewModeSwitch;
