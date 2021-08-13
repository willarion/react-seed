import React from 'react';
import { Link } from 'react-router-dom';

interface UserProfileProps {
  to: string;
  alt?: string;
  src?: string;
  name?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  to,
  alt,
  name,
  src,
}) => {
  return (
    <Link to={to} className="profile">
      <span>{name}</span>
      <img alt={alt} src={src} />
    </Link>
  );
};
