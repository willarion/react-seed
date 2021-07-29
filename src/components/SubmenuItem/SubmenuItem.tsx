import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useSearchParams } from '../../hooks/useSearchParams/useSearchParams';

interface SubmenuItemProps {
  search?: string;
  isActive?: boolean;
  to: string;
  label?: string;
}

export const SubmenuItem: React.FC<SubmenuItemProps> = ({
  children,
  search,
  to,
  label,
}) => {
  const params = useSearchParams();

  const active = label === params.label ? true : false;

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
