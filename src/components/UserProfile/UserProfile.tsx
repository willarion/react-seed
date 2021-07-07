import React from 'react';
import { Link } from 'react-router-dom';

interface UserProfileProps {
  to: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ to }) => {
  return (
    <Link to={to} className="profile">
      <span>User name</span>
      {/*TODO get username and image? from context of user*/}
      <img alt="profile" src="../../images/profilePhoto.png" />
    </Link>
  );
};
