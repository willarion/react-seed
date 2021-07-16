import React from 'react';
import { useLocation } from 'react-router-dom';
import useAuthToken from './useAuthToken';
import { UserMessage } from '../models/UserMessage';
import { getMessageContent } from '../api/api';
import { getUsefulMessageFields } from '../utils/getUsefulMessageFields';

export const useSingleMessage = (): UserMessage => {
  const location = useLocation();
  const id = location.state;
  const token = useAuthToken();

  const [message, setMessage] = React.useState<UserMessage | null>(null);

  React.useEffect(() => {
    if (token !== '') {
      getMessageContent(id, token).then((res) => {
        console.log(res);
        setMessage(getUsefulMessageFields(res, false));
      });
    }
  }, [id, token]);

  return message;
};
