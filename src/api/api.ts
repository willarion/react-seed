import axios from 'axios';
import { GoogleMessage } from '../models/GoogleMessage';
import { UserMessage } from '../models/UserMessage';
import { getUsefulMessageFields } from '../utils/getUsefulMessageFields';

interface MessagesVitalInfo {
  messages: Array<string>;
  pageToken: string;
}

export const getMessages = async (
  authToken: string,
  filter = '',
  // pageToken?: string,
): Promise<MessagesVitalInfo> => {
  const { data } = await axios.get(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages`,
    {
      params: {
        maxResults: 3,
        access_token: authToken,
        q: filter,
      },
    },
  );

  const messages = data.messages.map((item: { id: string; thread: string }) => {
    return item.id;
  });

  const pageToken = data.nextPageToken ? data.nextPageToken : '';

  return { messages, pageToken };
};

export const getMessageContent = async (
  id: string | unknown,
  authToken: string,
): Promise<GoogleMessage> => {
  const { data } = await axios.get(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}?`,
    {
      params: {
        access_token: authToken,
      },
    },
  );
  return data;
};

interface UserMessagesInfo {
  finalResult: Array<UserMessage>;
  pageToken: string;
}

export const getMessagesList = async (
  authToken: string,
  // todo
  filter = '',
  // pageToken?: string,
): Promise<UserMessagesInfo> => {
  const messagesInfo = await getMessages(authToken, filter);
  const ids = messagesInfo.messages;
  const messages = ids.map((id) => getMessageContent(id, authToken));

  const result = await Promise.allSettled(messages);
  const finalResult = result
    .filter((item) => item.status === 'fulfilled')
    .map((item) => (item as PromiseFulfilledResult<GoogleMessage>).value)
    .map((item) => getUsefulMessageFields(item, true));

  return { finalResult, pageToken: messagesInfo.pageToken };
};
