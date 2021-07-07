import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderBtnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  buttonType: 'icon-bell' | 'icon-mail';
  to: string;
}

export const HeaderBtn: React.FC<HeaderBtnProps> = ({ buttonType, to }) => {
  return (
    <Link to={to} className="btn btn-sm btn-header">
      <i className={`headerIcon ${buttonType}`} />
    </Link>
  );
};
