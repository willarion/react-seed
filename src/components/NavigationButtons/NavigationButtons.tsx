import React from 'react';

interface NavigationButtonsProps {
  onForward: () => void;
  onBack: () => void;
  onBackButton: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onForward,
  onBack,
  onBackButton,
}) => {
  return (
    <div className="controlButtons">
      <button
        onClick={onBack}
        type="button"
        className="btn btn-default btn-prevNext"
        disabled={onBackButton}
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
