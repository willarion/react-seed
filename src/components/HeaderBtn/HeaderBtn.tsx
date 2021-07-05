import React from 'react';

interface HeaderBtnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  buttonType: 'icon-bell' | 'icon-mail';
}

export const HeaderBtn: React.FC<HeaderBtnProps> = ({ buttonType }) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="btn btn-sm btn-header">
      <i className={`headerIcon ${buttonType}`} />
    </a>
  );
};
