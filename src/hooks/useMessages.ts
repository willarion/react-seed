import React from 'react';
import { getMessagesList } from '../api/api';
import { UserMessage } from '../models/UserMessage';
import useAuthToken from './useAuthToken';
import { useNextPageToken } from './useNextPageToken';
import { last, initial } from 'lodash';

function useMessages(filter: string): {
  messages: Array<UserMessage>;
  pageToken: Array<string>;
  getNextMessagesList: (oldFilter: string) => void;
  getPreviousMessagesList: (oldFilter: string) => void;
} {
  const token = useAuthToken();

  const [messages, setMessages] = React.useState<Array<UserMessage>>([]);

  const { pageToken, saveOnePageToken, saveLessPageTokens, saveMorePageToken } =
    useNextPageToken();

  React.useEffect(() => {
    getMessagesList(token, filter)
      .then((res) => {
        setMessages(res.finalResult);
        saveOnePageToken(res.pageToken);
      })
      .catch(() => setMessages([]));
  }, [filter]);

  const getNextMessagesList = (oldFilter: string) => {
    const nextPageToken = last(pageToken);

    getMessagesList(token, oldFilter, nextPageToken)
      .then((res) => {
        setMessages(res.finalResult);
        saveMorePageToken(res.pageToken);
      })
      .catch(() => setMessages([]));
  };

  const getPreviousMessagesList = (oldFilter: string) => {
    const shorterArray = initial(pageToken);
    const previousPageToken = last(initial(shorterArray)); // get penultimate pageToken

    getMessagesList(token, oldFilter, previousPageToken)
      .then((res) => {
        setMessages(res.finalResult);
        saveLessPageTokens(shorterArray);
      })
      .catch(() => setMessages([]));
  };

  return { messages, pageToken, getNextMessagesList, getPreviousMessagesList };
}

export default useMessages;
