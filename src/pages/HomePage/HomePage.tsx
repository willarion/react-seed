import React from 'react';
import useUserProfile from '../../hooks/useUserProfile';
import { Header } from '../../components/Header/Header';
import { Menu } from '../../components/Menu/Menu';
import { ContainerMain } from '../../components/ContainerMain/ContainerMain';
import { Submenu } from '../../components/Submenu/Submenu';
import { UserProfile } from '../../models/UserProfile';
import { PostsContainer } from '../../components/PostsContainer/PostsContainer';

export interface LoginState {
  user: UserProfile | null;
  access: string;
}

export const HomePage: React.FC = ({}) => {
  ``;
  const user = useUserProfile();
  return (
    <section>
      <Header />
      <Menu />
      <ContainerMain>
        <Submenu />
        {user && <PostsContainer />}
      </ContainerMain>
    </section>
  );
};
