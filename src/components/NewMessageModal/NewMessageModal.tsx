import React from 'react';
import { Portal } from '../Portal/Portal';
import classNames from 'classnames';
import styles from './NewMessageModale.module.css';
import { ModalPath } from '../../models/ModalPath';
import { useModal } from '../../hooks/useModal/useModal';

export const NewMessageModal: React.FC<ModalPath> = ({ pathname }) => {
  const { handleClose, handleSend, preventModalClosing } = useModal(pathname);

  return (
    <Portal>
      <div
        role="none"
        className={classNames(styles.modal__container)}
        onClick={handleClose}
      >
        <div
          role="none"
          onClick={preventModalClosing}
          className={classNames(styles.modal_content)}
        >
          <div className={classNames('modal-header', styles.header)}>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">
              Write new e-mail
            </h4>
          </div>
          <div className={classNames('modal-body', styles.modal__main)}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="modal-label">To:</label>
            <input type="text" className="form-control" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="modal-label">Cc:</label>
            <input type="text" className="form-control" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="modal-label">Subject:</label>
            <input type="text" className="form-control" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="modal-label">Content:</label>
            <textarea className="form-control" rows={5}></textarea>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              onClick={handleClose}
            >
              Cancell
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSend}
            >
              Send e-mail
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};
