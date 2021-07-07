import React from 'react';
// import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Menu } from '../../components/Menu/Menu';
import { ContainerMain } from '../../components/ContainerMain/ContainerMain';
import { Submenu } from '../../components/Submenu/Submenu';

export const HomePage: React.FC = ({}) => {
  return (
    <section>
      <Header />
      <Menu />
      <ContainerMain>
        <Submenu />
      </ContainerMain>
    </section>
  );
};
