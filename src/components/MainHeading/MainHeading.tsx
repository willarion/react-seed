import React from 'react';

interface MainHeadingProps {
  heading: string;
}

export const MainHeading: React.FC<MainHeadingProps> = ({ heading }) => {
  return (
    <div className="heading">
      <h1>{heading}</h1>
    </div>
  );
};
