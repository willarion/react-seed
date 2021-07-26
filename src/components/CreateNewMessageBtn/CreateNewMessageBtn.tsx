import React from 'react';
import classNames from 'classnames';
import styles from './CreateNewMessageBtn.module.css';
import { ModalFunctionality } from '../../models/ModalFunctionality';

export const CreateNewMessageBtn: React.FC<Partial<ModalFunctionality>> = ({
  toggleModal,
}) => {
  return (
    <button
      onClick={toggleModal}
      type="button"
      className={classNames(styles.compose_button)}
      data-toggle="modal"
      data-target="#myModal"
    >
      <i className="icon-plus-small" />
      <span>New e-mail</span>
    </button>
  );
};
