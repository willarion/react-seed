import React from 'react';
import useUserProfile from '../../hooks/useUserProfile/useUserProfile';
import { Header } from '../../components/Header/Header';
import { Menu } from '../../components/Menu/Menu';
import { ContainerMain } from '../../components/ContainerMain/ContainerMain';
import { Submenu } from '../../components/Submenu/Submenu';
import { UserProfile } from '../../models/UserProfile';
import { PostsContainer } from '../../components/PostsContainer/PostsContainer';
import { NewMessageModal } from '../../components/NewMessageModal/NewMessageModal';
import { useModal } from '../../hooks/useModal/useModal';

export interface LoginState {
  user: UserProfile | null;
  access: string;
}

export const HomePage: React.FC = () => {
  const user = useUserProfile();

  const { isOpen, toggleModal, handleSendMessage } = useModal();

  return (
    <section>
      <NewMessageModal
        open={isOpen}
        onSend={handleSendMessage}
        onClose={toggleModal}
      />
      <Header />
      <Menu />
      <ContainerMain>
        <Submenu />
        {user && <PostsContainer toggleModal={toggleModal} />}
      </ContainerMain>
    </section>
  );
};
