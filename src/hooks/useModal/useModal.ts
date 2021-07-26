import React from 'react';
import { ModalFunctionality } from '../../models/ModalFunctionality';

export const useModal = (): ModalFunctionality => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleSendMessage = () => {
    toggleModal();
    // todo send message
  };

  return { isOpen, toggleModal, handleSendMessage };
};
