import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  desktopImage: string;
  mobileImage: string;
  to: string;
}

export const Logo: React.FC<LogoProps> = ({
  desktopImage,
  mobileImage,
  to,
}) => {
  return (
    <div className="logoBlock">
      <Link to={to}>
        <img src={desktopImage} alt="logo" className="logo" title="Logo" />
        <img src={mobileImage} alt="logo" className="logoMobile" />
      </Link>
      <span>Page title</span>
    </div>
  );
};
