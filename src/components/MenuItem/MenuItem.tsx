import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  search?: string;
  isActive?: boolean;
  to: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, search, to }) => {
  return (
    <li>
      <Link
        to={{ pathname: to, search }}
        className={classNames('', { active: false })}
      >
        {children}
      </Link>
    </li>
  );
};
