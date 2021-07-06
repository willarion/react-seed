import React from 'react';
import { Submenu } from '../Submenu/Submenu';
import { MainSection } from '../MainSection/MainSection';

export const ContainerMain: React.FC = ({}) => {
  return (
    <main className="container main">
      <Submenu />
      <MainSection />
    </main>
  );
};
