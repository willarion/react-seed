import React from 'react';
import styles from './NavigationButtons.module.css';
import classNames from 'classnames';

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
    <div className={classNames('controlButtons', styles.buttons_center)}>
      <button
        onClick={onBack}
        type="button"
        key="back-button"
        className="btn btn-default btn-prevNext"
        disabled={backButtonStatus}
      >
        <i className="icon-left-open-big" />
        Previous
      </button>
      <button
        onClick={onForward}
        type="button"
        key="forward-button"
        className="btn btn-default btn-prevNext"
      >
        Next
        <i className="icon-right-open-big" />
      </button>
    </div>
  );
};
