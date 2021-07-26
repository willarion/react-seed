import React from 'react';
import classNames from 'classnames';
import styles from './CreateNewMessageBtn.module.css';
import { ModalFunction } from '../../models/ModalFunction';

export const CreateNewMessageBtn: React.FC<ModalFunction> = ({
  toggleModal,
}) => {
  return (
    <button
      onClick={toggleModal}
      type="button"
      className={classNames('newItem', styles.composeBtn)}
      data-toggle="modal"
      data-target="#myModal"
    >
      <i className="icon-plus-small" />
      <span>New e-mail</span>
    </button>
  );
};
