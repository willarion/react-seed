import React from 'react';
import { Link } from 'react-router-dom';

interface UserProfileProps {
  to: string;
  alt: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ to, alt }) => {
  return (
    <Link to={to} className="profile">
      <span>User name</span>
      {/*TODO get username and image? from context of user*/}
      <img alt={alt} src="../../images/profilePhoto.png" />
    </Link>
  );
};
