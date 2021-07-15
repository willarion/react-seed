import axios from 'axios';
import { GoogleMessage } from '../models/GoogleMessage';
import { MessageToRender } from '../models/MessageToRender';
import { getUsefulMessageFields } from '../utils/getUsefulMessageFields';

const getMessages = async (
  authToken: string,
  // todo
  // filter: unknown = {},
  // pageToken?: string,
): Promise<Array<string>> => {
  const { data } = await axios.get(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=3&access_token=${authToken}`,
  );

  // todo return also next page token data.nextPageToken
  return data.messages.map((item: { id: string; thread: string }) => {
    return item.id;
  });
};

const getMessageContent = async (
  id: string,
  authToken: string,
): Promise<GoogleMessage> => {
  const { data } = await axios.get(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}?access_token=${authToken}`,
  );
  return data;
};

const getMessagesList = async (
  authToken: string,
  // todo
  // filter: unknown = {},
  // pageToken?: string,
): Promise<Array<MessageToRender>> => {
  const ids = await getMessages(authToken);
  const messages = ids.map((id) => getMessageContent(id, authToken));
  const result = await Promise.allSettled(messages);
  return result
    .filter((item) => item.status === 'fulfilled')
    .map((item) => (item as PromiseFulfilledResult<GoogleMessage>).value)
    .map(getUsefulMessageFields);
};

export { getMessagesList };
