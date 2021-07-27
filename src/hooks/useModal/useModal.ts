import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ModalPath } from '../../models/ModalPath';

export const useModal = (pathname: ModalPath['pathname']) => {
  const { search } = useLocation();
  const history = useHistory();

  const handleClose = useCallback(() => {
    if (pathname) {
      history.replace({
        pathname,
        search,
      });
    } else {
      history.goBack();
    }
  }, [history, pathname, search]);

  const handleSend = useCallback(() => {
    // todo add sending message functionality
    handleClose();
  }, []);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const preventModalClosing = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  return { handleClose, handleSend, preventModalClosing };
};
