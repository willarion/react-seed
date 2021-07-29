import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useSearchParams } from '../../hooks/useSearchParams/useSearchParams';

interface MenuItemProps {
  search?: string;
  isActive?: boolean;
  to: string;
  category?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  search,
  to,
  category,
}) => {
  const params = useSearchParams();

  const active = category === params.category ? true : false;

  return (
    <li>
      <Link
        to={{ pathname: to, search }}
        className={classNames('', { active })}
      >
        {children}
      </Link>
    </li>
  );
};
