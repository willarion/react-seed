import React, { BaseSyntheticEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MessageFormInput } from '../../models/MessageFormInput';
import { sendMessage } from '../../api/api';
import { encodeMessage } from '../../utils/encodeMessage';
import { useModal } from '../useModal/useModal';
import useAuthToken from '../useAuthToken/useAuthToken';
import { ModalPath } from '../../models/ModalPath';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

export const useSendMessage = (
  pathname: ModalPath['pathname'],
): {
  handleClose: () => void;
  preventModalClosing: (event: React.MouseEvent) => void;
  sending: boolean;
  register: UseFormRegister<MessageFormInput>;
  handleSubmit: (e?: BaseSyntheticEvent | undefined) => Promise<void>;
} => {
  const token = useAuthToken();
  const { register, handleSubmit } = useForm<MessageFormInput>();

  const { handleClose, handleSend, preventModalClosing } = useModal(pathname);

  const [sending, setSending] = useState(false);

  const onSubmit: SubmitHandler<MessageFormInput> = async (data) => {
    setSending(true);
    try {
      const response = await sendMessage(encodeMessage(data), token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setSending(false);
    handleSend();
  };

  return {
    handleClose,
    preventModalClosing,
    sending,
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
};
