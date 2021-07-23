import React from 'react';

interface NavigationButtonsProps {
  onForward: () => void;
  onBack: () => void;
  backButtonStatus: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onForward,
  onBack,
  backButtonStatus,
}) => {
  return (
    <div className="controlButtons">
      <button
        onClick={onBack}
        type="button"
        className="btn btn-default btn-prevNext"
        disabled={backButtonStatus}
      >
        <i className="icon-left-open-big" />
        Previous
      </button>
      <button
        onClick={onForward}
        type="button"
        className="btn btn-default btn-prevNext"
      >
        Next
        <i className="icon-right-open-big" />
      </button>
    </div>
  );
};
