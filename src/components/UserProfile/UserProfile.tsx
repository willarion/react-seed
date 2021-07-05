import React from 'react';

export const UserProfile: React.FC = ({}) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="profile">
      <span>User name</span>
      <img alt="profile" src="images/profilePhoto.png" />
    </a>
  );
};
