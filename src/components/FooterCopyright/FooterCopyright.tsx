import React from 'react';

interface FooterCopyrightProps {
  year: string;
}

export const FooterCopyright: React.FC<FooterCopyrightProps> = ({ year }) => {
  return (
    <div className="rights clearfix">
      <img alt="logo" src="images/logotype2.png" className="pull-left" />
      <p>&copy;{year}. Qulix Systems. All rights reserved.</p>
    </div>
  );
};
