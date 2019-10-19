import React from 'react';

const ViewModeSwitch = ({ selectedView, onViewModeSwitch }) => {
  const viewType = selectedView;

  return (
    <div className="ui compact menu">
      <button
        className={`item${viewType === 'alignjustify' ? ' active' : ''}`}
        onClick={() => onViewModeSwitch('alignjustify')}
      >
        <i className="align justify icon"></i>
        Plain List
      </button>
      <button
        className={`item${viewType === 'list' ? ' active' : ''}`}
        onClick={() => onViewModeSwitch('list')}
      >
        <i className="list icon"></i>
        List
      </button>
      <button
        className={`item${viewType === 'listol' ? ' active' : ''}`}
        onClick={() => onViewModeSwitch('listol')}
      >
        <i className="list ol icon"></i>
        Numbered List
      </button>
    </div>
  );
};

export default ViewModeSwitch;
