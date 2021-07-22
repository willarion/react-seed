import { useCallback, useEffect, useState } from 'react';
import { getMessagesList } from '../../api/api';
import { UserPreviewMessage } from '../../models/UserPreviewMessage';
import useAuthToken from '../useAuthToken/useAuthToken';
import { useNextPageToken } from '../useNextPageToken/useNextPageToken';
import { last, initial } from 'lodash';

function useMessages(filter: string): {
  messages: Array<UserPreviewMessage>;
  pageTokensList: Array<string>;
  getNextMessagesList: (oldFilter: string) => void;
  getPreviousMessagesList: (oldFilter: string) => void;
} {
  const token = useAuthToken();

  const [messages, setMessages] = useState<Array<UserPreviewMessage>>([]);

  const {
    pageTokensList,
    saveOnePageToken,
    saveLessPageTokens,
    saveMorePageToken,
  } = useNextPageToken();

  useEffect(() => {
    getMessagesList(token, filter)
      .then(({ messagesList, pageToken }) => {
        setMessages(messagesList);
        saveOnePageToken(pageToken);
      })
      .catch(() => setMessages([]));
  }, [filter]);

  const getNextMessagesList = useCallback(
    (oldFilter: string) => {
      const nextPageToken = last(pageTokensList);

      getMessagesList(token, oldFilter, nextPageToken)
        .then(({ messagesList, pageToken }) => {
          setMessages(messagesList);
          saveMorePageToken(pageToken);
        })
        .catch(() => setMessages([]));
    },
    [pageTokensList, saveMorePageToken, token],
  );

  const getPreviousMessagesList = useCallback(
    (oldFilter: string) => {
      if (pageTokensList.length < 2) {
        return;
      }
      const shorterArray = initial(pageTokensList);
      const previousPageToken = last(initial(shorterArray)); // get penultimate pageToken

      getMessagesList(token, oldFilter, previousPageToken)
        .then(({ messagesList }) => {
          setMessages(messagesList);
          saveLessPageTokens(shorterArray);
        })
        .catch(() => setMessages([]));
    },
    [pageTokensList, saveLessPageTokens, token],
  );

  return {
    messages,
    pageTokensList,
    getNextMessagesList,
    getPreviousMessagesList,
  };
}

export default useMessages;
