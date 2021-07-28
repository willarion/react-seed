import React from 'react';
import { Logo } from '../Logo/Logo';
import { UserProfile } from '../UserProfile/UserProfile';
import useUserProfile from '../../hooks/useUserProfile/useUserProfile';
import { GoogleBtns } from '../GoogleBtns/GoogleBtns';
import { DispatchUserInfo } from '../../models/DispatchUserInfo';

export const Header: React.FC<DispatchUserInfo> = ({ dispatchUserInfo }) => {
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
            <UserProfile
              alt={'userpic'}
              to={'/home'}
              name={user?.name}
              src={
                user
                  ? user.imageUrl
                  : 'https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1-300x300.png'
              }
            />
            <GoogleBtns dispatchUserInfo={dispatchUserInfo} />
          </div>
        </div>
      </div>
    </header>
  );
};
