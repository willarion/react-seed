import React from 'react';
import { Logo } from '../Logo/Logo';
import { HeaderBtn } from '../HeaderBtn/HeaderBtn';
import { UserProfile } from '../UserProfile/UserProfile';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <Logo
            to={'index.html'}
            desktopImage={'images/logotype.png'}
            mobileImage={'images/logotypeMobile.png'}
          />
          <div className="header-comp pull-right">
            <HeaderBtn to={'index.html'} buttonType={'icon-bell'} />
            <HeaderBtn to={'index.html'} buttonType={'icon-mail'} />
            <UserProfile to={'index.html'} />
          </div>
        </div>
      </div>
    </header>
  );
};
