import axios from 'axios';
import { GoogleMessage } from '../models/GoogleMessage';
import { UserPreviewMessage } from '../models/UserPreviewMessage';
import { getUsefulMessagePreviewFields } from '../utils/getUsefulMessagePreviewFields';
import { map } from 'lodash';

interface MessagesVitalInfo {
  messages: Array<string>;
  pageToken: string;
}

const GOOGLE_FIRST_PAGE_TOKEN = '0';

export const getMessages = async (
  authToken: string,
  filter = '',
  nextPageToken = GOOGLE_FIRST_PAGE_TOKEN,
): Promise<MessagesVitalInfo> => {
  const { data } = await axios.get(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages`,
    {
      params: {
        maxResults: 3,
        pageToken: nextPageToken,
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

export interface UserMessagesInfo {
  messagesList: Array<UserPreviewMessage>;
  pageToken: string;
}

export const getMessagesList = async (
  authToken: string,
  // todo
  filter = '',
  nextPageToken?: string,
): Promise<UserMessagesInfo> => {
  const { messages, pageToken } = await getMessages(
    authToken,
    filter,
    nextPageToken,
  );
  const messagesWithContent = map(messages, (id) =>
    getMessageContent(id, authToken),
  );

  const result = await Promise.allSettled(messagesWithContent);
  const messagesList = result
    .filter((item) => item.status === 'fulfilled')
    .map((item) => (item as PromiseFulfilledResult<GoogleMessage>).value)
    .map((item) => getUsefulMessagePreviewFields(item));

  return { messagesList, pageToken };
};

export const sendMessage = (encodedMessage: string, authToken: string) => {
  return axios
    .post(
      'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
      { raw: encodedMessage },
      {
        params: {
          access_token: authToken,
        },
      },
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
