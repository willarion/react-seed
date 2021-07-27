import React, { useCallback } from 'react';
import classNames from 'classnames';
import styles from './CreateNewMessageBtn.module.css';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ModalPath } from '../../models/ModalPath';

export const CreateNewMessageBtn: React.FC<ModalPath> = ({ pathname }) => {
  const { search } = useLocation();
  const history = useHistory();

  const handleOpen = useCallback(() => {
    history.push({
      pathname,
      search,
    });
  }, [history, pathname, search]);

  return (
    <button
      onClick={handleOpen}
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
