import React from 'react';
import { MenuItem } from '../MenuItem/MenuItem';

export const Menu: React.FC = ({}) => {
  //todo function toggleNavBar() {}

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
            <MenuItem
              to={'index.html'}
              itemName={'Menu Item'}
              isActive={false}
            />
            <MenuItem
              to={'index.html'}
              itemName={'Menu Item'}
              isActive={false}
            />
            <MenuItem
              to={'index.html'}
              itemName={'Menu Item'}
              isActive={false}
            />
            <MenuItem
              to={'index.html'}
              itemName={'Menu Item'}
              isActive={true}
            />
            <MenuItem
              to={'index.html'}
              itemName={'Menu Item'}
              isActive={false}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};
