import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface MenuItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  itemName: string;
  isActive?: boolean;
  to: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  itemName,
  isActive,
  to,
}) => {
  return (
    <li>
      <Link
        to={to}
        title={itemName}
        className={classNames('', { active: isActive })}
      >
        {itemName}
      </Link>
    </li>
  );
};
