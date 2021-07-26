import React from 'react';
import { Portal } from '../Portal/Portal';
import classNames from 'classnames';
import styles from './NewMessageModale.module.css';

interface NewMessageModal {
  open: boolean;
  onClose: () => void;
  onSend: () => void;
}

export const NewMessageModal: React.FC<NewMessageModal> = ({
  open,
  onClose,
  onSend,
}) => {
  return open ? (
    <Portal>
      <div className={classNames(styles.modal__container)}>
        <div className={classNames(styles.modal_content)}>
          <div className={classNames('modal-header', styles.header)}>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
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
              onClick={onClose}
            >
              Cancell
            </button>
            <button type="button" className="btn btn-primary" onClick={onSend}>
              Send e-mail
            </button>
          </div>
        </div>
      </div>
    </Portal>
  ) : null;
};
