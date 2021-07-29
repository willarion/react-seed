import { useCallback, useEffect, useState } from 'react';
import { deleteMessage, getMessagesList } from '../../api/api';
import { UserPreviewMessage } from '../../models/UserPreviewMessage';
import useAuthToken from '../useAuthToken/useAuthToken';
import { useNextPageToken } from '../useNextPageToken/useNextPageToken';
import { last, initial } from 'lodash';

function useMessages(filter: string): {
  messages: Array<UserPreviewMessage>;
  pageTokensList: Array<string>;
  getNextMessagesList: (oldFilter: string) => void;
  getPreviousMessagesList: (oldFilter: string) => void;
  deletePost: (id: string) => void;
} {
  const token = useAuthToken();

  const [messages, setMessages] = useState<Array<UserPreviewMessage>>([]);

  const {
    pageTokensList,
    makeNewPageTokensList,
    saveLessPageTokens,
    saveMorePageToken,
  } = useNextPageToken();

  const getMessages = useCallback(() => {
    getMessagesList(token, filter)
      .then(({ messagesList, pageToken }) => {
        setMessages(messagesList);
        makeNewPageTokensList(pageToken);
      })
      .catch(() => setMessages([]));
  }, [filter]);

  useEffect(() => {
    getMessages();
  }, [filter]);

  const getNextMessagesList = useCallback(
    async (oldFilter: string) => {
      const nextPageToken = last(pageTokensList);

      try {
        const { messagesList, pageToken } = await getMessagesList(
          token,
          oldFilter,
          nextPageToken,
        );
        setMessages(messagesList);
        saveMorePageToken(pageToken);
      } catch (err) {
        setMessages([]);
      }
    },
    [pageTokensList, saveMorePageToken, token],
  );

  const getPreviousMessagesList = useCallback(
    async (oldFilter: string) => {
      if (pageTokensList.length < 2) {
        return;
      }
      const shorterArray = initial(pageTokensList);
      const previousPageToken = last(initial(shorterArray)); // get penultimate pageToken

      try {
        const { messagesList } = await getMessagesList(
          token,
          oldFilter,
          previousPageToken,
        );
        setMessages(messagesList);
        saveLessPageTokens(shorterArray);
      } catch (err) {
        setMessages([]);
      }
    },
    [pageTokensList, saveLessPageTokens, token],
  );

  const deleteCard = useCallback(async (id) => {
    await deleteMessage(id, token);
    getMessages();
  }, []);

  return {
    messages,
    pageTokensList,
    getNextMessagesList,
    getPreviousMessagesList,
    deletePost: deleteCard,
  };
}

export default useMessages;
