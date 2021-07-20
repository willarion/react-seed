import React from 'react';

export const NavigationButtons: React.FC = () => {
  // todo disable previous btn, when on first page
  return (
    <div className="controlButtons">
      <button type="button" className="btn btn-default btn-prevNext">
        <i className="icon-left-open-big"></i>Previous
      </button>
      <button type="button" className="btn btn-default btn-prevNext">
        Next
        <i className="icon-right-open-big"></i>
      </button>
    </div>
  );
};
