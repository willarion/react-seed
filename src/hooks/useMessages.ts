import React from 'react';
import { getMessagesList } from '../api/api';
import { UserMessage } from '../models/UserMessage';
import useAuthToken from './useAuthToken';
import { useNextPageToken } from './useNextPageToken';

function useMessages(filter: string): {
  messages: Array<UserMessage>;
  pageToken: Array<string>;
} {
  const token = useAuthToken();

  const [messages, setMessages] = React.useState<Array<UserMessage>>([]);

  const { pageToken, savePageToken, deletePageToken } = useNextPageToken();

  React.useEffect(() => {
    deletePageToken();
    getMessagesList(token, filter)
      .then((res) => {
        setMessages(res.finalResult);
        savePageToken(res.pageToken);
      })
      .catch(() => setMessages([]));
  }, [filter]);

  return { messages, pageToken };
}

export default useMessages;
