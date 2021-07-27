import React from 'react';
import { Portal } from '../Portal/Portal';
import classNames from 'classnames';
import styles from './NewMessageModale.module.css';
import { ModalPath } from '../../models/ModalPath';
import { useModal } from '../../hooks/useModal/useModal';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  to: string;
  copy: string;
  subject: string;
  message: string;
}

export const NewMessageModal: React.FC<ModalPath> = ({ pathname }) => {
  const { handleClose, handleSend, preventModalClosing } = useModal(pathname);
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <Portal>
      <div
        role="none"
        className={classNames(styles.modal__container)}
        onClick={handleClose}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
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
            <label htmlFor="email-input" className="modal-label">
              To:
            </label>
            <input
              id="email-input"
              type="email"
              className="form-control"
              {...register('to', { required: true })}
            />
            <label htmlFor="copy-input" className="modal-label">
              Cc:
            </label>
            <input
              id="copy-input"
              type="email"
              className="form-control"
              {...register('copy', { required: false })}
            />
            <label htmlFor="subject-input" className="modal-label">
              Subject:
            </label>
            <input
              id="subject-input"
              type="text"
              className="form-control"
              {...register('subject', { required: false })}
            />
            <label htmlFor="message-input" className="modal-label">
              Content:
            </label>
            <textarea
              id="message-input"
              className="form-control"
              rows={5}
              {...register('subject', { required: true })}
            ></textarea>
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
              type="submit"
              className="btn btn-primary"
              onClick={handleSend}
            >
              Send e-mail
            </button>
          </div>
        </form>
      </div>
    </Portal>
  );
};
