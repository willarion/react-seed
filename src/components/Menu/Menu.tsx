import React from 'react';
import { MenuItem } from '../MenuItem/MenuItem';
import { useMessagesSearchString } from '../../hooks/useSearchParams';

export const Menu: React.FC = ({}) => {
  //todo function toggleNavBar() {}
  const promotionsSearch = useMessagesSearchString({ label: 'promotions' });
  const socialsSearch = useMessagesSearchString({ label: 'social' });

  return (
    <nav className="navbar navbar-default navbar-top">
      <div className="container">
        <div className="navbar-header">
          <button
            //todo onClick={toggleNavBar}
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target=".bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className="collapse navbar-collapse bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <MenuItem to={'/home'} search={promotionsSearch}>
              Promotions
            </MenuItem>
            <MenuItem to={'/home'} search={socialsSearch}>
              Social
            </MenuItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};
