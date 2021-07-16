import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface SubmenuItemProps {
  search?: string;
  isActive?: boolean;
  to: string;
}

export const SubmenuItem: React.FC<SubmenuItemProps> = ({
  children,
  search,
  to,
}) => {
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
