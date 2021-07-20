import React from 'react';
import { getMessagesList } from '../api/api';
import { UserMessage } from '../models/UserMessage';
import useAuthToken from './useAuthToken';

function useMessages(filter: string): Array<UserMessage> {
  const token = useAuthToken();

  const [messages, setMessages] = React.useState<Array<UserMessage>>([]);
  React.useEffect(() => {
    getMessagesList(token, filter)
      .then((res) => setMessages(res))
      .catch(() => setMessages([]));
  }, [filter]);

  return messages;
}

export default useMessages;
