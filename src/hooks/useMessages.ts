import React from 'react';
// import useAuthToken from './useAuthToken';
import { getMessagesList } from '../api/api';
// todo make interface for Message instead of any

function useMessages(token: string): Array<any> {
  const [messages, setMessages] = React.useState<Array<string>>([]);
  React.useEffect(() => {
    getMessagesList(token)
      .then((res) => {
        setMessages(res);
      })
      .catch(() => setMessages([]));
  }, [token]);

  return messages;
}

export default useMessages;
