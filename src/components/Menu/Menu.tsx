import React from 'react';
import { MenuItem } from '../MenuItem/MenuItem';

export const Menu: React.FC = ({}) => {
  const menuItems = [
    { name: 'Menu Item', id: 1 },
    { name: 'Menu Item', id: 2 },
    { name: 'Menu Item', id: 3 },
    { name: 'Menu Item', id: 4, active: true },
    { name: 'Menu Item', id: 5 },
  ];

  // function toggleNavBar() {}

  return (
    <nav className="navbar navbar-default navbar-top">
      <div className="container">
        <div className="navbar-header">
          <button
            // onClick={toggleNavBar}
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
            {menuItems.map((item) => (
              <MenuItem
                itemName={item.name}
                key={item.id}
                isActive={item?.active}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
