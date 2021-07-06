import React from 'react';

export const NavigationButtons: React.FC = () => {
  return (
    <div className="controlButtons">
      <a href="index.html" className="btn btn-default btn-prevNext">
        <i className="icon-left-open-big"></i>Previous
      </a>
      <a href="index.html" className="btn btn-default btn-prevNext">
        Next
        <i className="icon-right-open-big"></i>
      </a>
    </div>
  );
};
