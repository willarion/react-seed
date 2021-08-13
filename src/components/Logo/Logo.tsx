import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  desktopImage: string;
  mobileImage: string;
  to: string;
  alt: string;
}

export const Logo: React.FC<LogoProps> = ({
  desktopImage,
  mobileImage,
  to,
  alt,
}) => {
  return (
    <div className="logoBlock">
      <Link to={to}>
        <img src={desktopImage} alt={alt} className="logo" title="Logo" />
        <img src={mobileImage} alt={alt} className="logoMobile" />
      </Link>
    </div>
  );
};
