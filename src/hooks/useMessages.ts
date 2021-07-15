import React from 'react';
import { getMessagesList } from '../api/api';
import { UserMessage } from '../models/UserMessage';
import useAuthToken from './useAuthToken';

function useMessages(): Array<UserMessage> {
  const token = useAuthToken();
  const [messages, setMessages] = React.useState<Array<UserMessage>>([]);
  React.useEffect(() => {
    getMessagesList(token)
      .then((res) => setMessages(res))
      .catch(() => setMessages([]));
  }, []);

  return messages;
}

export default useMessages;
