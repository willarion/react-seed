import React, { useState } from 'react';
import { Portal } from '../Portal/Portal';
import classNames from 'classnames';
import styles from './NewMessageModale.module.css';
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

  //todo make hook for sending
  const [sending, setSending] = useState(false);

  const onSubmit: SubmitHandler<MessageFormInput> = (data) => {
    setSending(true);
    sendMessage(encodeMessage(data), token).finally(() => {
      setSending(false);
      handleSend();
    });
  };

  const [copiesVisible, setCopiesVisible] = useState(false);

  const toggleCopies = () => {
    setCopiesVisible(!copiesVisible);
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
            <div className={classNames(styles.required)}>
              <label htmlFor="email-input" className="modal-label">
                To:
              </label>
              <span className={classNames(styles.span)}>required</span>
            </div>
            <input
              readOnly={sending}
              id="email-input"
              type="email"
              className="form-control"
              {...register('to', { required: true })}
            />
            <button
              onClick={toggleCopies}
              type="button"
              className={classNames(styles.showCopyBtn)}
            >
              toggle copy fields
            </button>
            <div
              className={classNames(
                copiesVisible
                  ? [styles.copies, styles.copies_visible]
                  : styles.copies,
              )}
            >
              <label
                htmlFor="copy-input"
                className={classNames('modal-label', styles.firstCopyField)}
              >
                Cc:
              </label>
              <input
                readOnly={sending}
                id="copy-input"
                type="email"
                className="form-control"
                {...register('copy', { required: false })}
              />
              <label htmlFor="copy-input" className="modal-label">
                Bcc:
              </label>
              <input
                readOnly={sending}
                id="secret-copy-input"
                type="email"
                className="form-control"
                {...register('secret', { required: false })}
              />
            </div>
            <label htmlFor="subject-input" className="modal-label">
              Subject:
            </label>
            <input
              readOnly={sending}
              id="subject-input"
              type="text"
              className="form-control"
              {...register('subject', { required: false })}
            />
            <div className={classNames(styles.required)}>
              {' '}
              <label htmlFor="message-input" className="modal-label">
                Content:
              </label>
              <span className={classNames(styles.span)}>required</span>
            </div>
            <textarea
              id="message-input"
              className="form-control"
              rows={3}
              disabled={sending}
              {...register('message', { required: true })}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              onClick={handleClose}
              disabled={sending}
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
                  disabled
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
