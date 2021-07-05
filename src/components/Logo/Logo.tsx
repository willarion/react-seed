import React from 'react';

export const Logo: React.FC = ({}) => {
  return (
    <div className="logoBlock">
      <a href="index.html">
        <img
          src="images/logotype.png"
          alt="logo"
          className="logo"
          title="Logo"
        />
        <img
          src="images/logotypeMobile.png"
          alt="logo"
          className="logoMobile"
        />
      </a>
      <span>Page title</span>
    </div>
  );
};
