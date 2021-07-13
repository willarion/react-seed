import React from 'react';
import { Logo } from '../Logo/Logo';
import { HeaderBtn } from '../HeaderBtn/HeaderBtn';
import { UserProfile } from '../UserProfile/UserProfile';
import useUserProfile from '../../hooks/useUserProfile';

export const Header: React.FC = () => {
  const user = useUserProfile();

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
            <HeaderBtn to={'/'} buttonType={'icon-bell'} />
            <HeaderBtn to={'/'} buttonType={'icon-mail'} />
            <UserProfile
              alt={'userpic'}
              to={'index.html'}
              name={user?.name}
              src={
                user
                  ? user.imageUrl
                  : 'https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1-300x300.png'
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};
