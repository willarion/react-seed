import React from 'react';
import { getMessagesList } from '../api/api';
import { MessageToRender } from '../models/MessageToRender';

function useMessages(token: string): Array<any> {
  const [messages, setMessages] = React.useState<Array<MessageToRender>>([]);
  React.useEffect(() => {
    getMessagesList(token)
      .then((res) => setMessages(res))
      .catch(() => setMessages([]));
  }, [token]);

  return messages;
}

export default useMessages;
