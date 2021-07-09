import React from 'react';
import { Logo } from '../Logo/Logo';
import { HeaderBtn } from '../HeaderBtn/HeaderBtn';
import { UserProfile } from '../UserProfile/UserProfile';
import { CurrentUserContext } from '../../pages/HomePage/HomePage';

export const Header: React.FC = () => {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <Logo
            pageTitle={'Page title'}
            to={'index.html'}
            alt={'logo'}
            desktopImage={'images/logotype.png'}
            mobileImage={'images/logotypeMobile.png'}
          />
          <div className="header-comp pull-right">
            <HeaderBtn to={'index.html'} buttonType={'icon-bell'} />
            <HeaderBtn to={'index.html'} buttonType={'icon-mail'} />
            <UserProfile
              alt={'userpic'}
              to={'index.html'}
              name={currentUser.user?.name}
              src={currentUser.user?.imageUrl}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
