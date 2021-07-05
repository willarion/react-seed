import React from 'react';
// import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Submenu } from '../../components/Submenu/Submenu';

export const HomePage: React.FC = () => {
  return (
    <section>
      <Header />
      <Submenu />
    </section>
  );
};
