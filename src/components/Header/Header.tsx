import React from 'react';
import { Logo } from '../Logo/Logo';
import { HeaderBtn } from '../HeaderBtn/HeaderBtn';
import { UserProfile } from '../UserProfile/UserProfile';

// interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
//   styleType: 'primary' | 'secondary';
// }
// <HeaderProps>

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <Logo />
          <div className="header-comp pull-right">
            <HeaderBtn buttonType={'icon-bell'} />
            <HeaderBtn buttonType={'icon-mail'} />
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  );
};
