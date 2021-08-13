import React from 'react';
import { createPortal } from 'react-dom';

export const Portal: React.FC = ({ children }) => {
  const modalRoot = document.getElementById('portal');

  return modalRoot && createPortal(children, modalRoot);
};
