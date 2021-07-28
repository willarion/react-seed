import React, { useState } from 'react';
import { Portal } from '../Portal/Portal';
import classNames from 'classnames';
import styles from './NewMessageModale.module.css';
``;
import { ModalPath } from '../../models/ModalPath';
import { useModal } from '../../hooks/useModal/useModal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MessageFormInput } from '../../models/MessageFormInput';
import { encodeMessage } from '../../utils/encodeMessage';
import { sendMessage } from '../../api/api';
import useAuthToken from '../../hooks/useAuthToken/useAuthToken';
import { Loader } from '../Loader/Loader';

export const NewMessageModal: React.FC<ModalPath> = ({ pathname }) => {
  const { handleClose, handleSend, preventModalClosing } = useModal(pathname);
  const { register, handleSubmit } = useForm<MessageFormInput>();
  const token = useAuthToken();

  const [sending, setSending] = useState(false);

  const onSubmit: SubmitHandler<MessageFormInput> = (data) => {
    setSending(true);
    sendMessage(encodeMessage(data), token).finally(() => {
      setSending(false);
      handleSend();
    });
  };

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
            <label htmlFor="copy-input" className="modal-label">
              Bcc:
            </label>
            <input
              id="secret-copy-input"
              type="email"
              className="form-control"
              {...register('secret', { required: false })}
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
              {...register('message', { required: true })}
            />
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
            {!sending ? (
              <button type="submit" className="btn btn-primary">
                Send e-mail
              </button>
            ) : (
              <>
                <button
                  type="submit"
                  className={classNames('btn btn-primary', styles.hiddenBtn)}
                >
                  Send e-mail
                </button>
                <Loader />
              </>
            )}
          </div>
        </form>
      </div>
    </Portal>
  );
};
