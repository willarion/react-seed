import axios from 'axios';

// todo make interface for Message instead of any
//
// interface Message {
//   value: {
//     snippet: string;
//     payload: {
//       headers: {};
//     };
//   };
// }

const getMessages = async (
  authToken: string,
  // filter: unknown = {},
  // pageToken?: string,
): Promise<Array<string>> => {
  const { data } = await axios.get(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=3&access_token=${authToken}`,
  );
  const messageIds = data.messages.map(
    (item: { id: string; thread: string }) => {
      return item.id;
    },
  );
  return messageIds;
};

const getMessageContent = async (
  id: string,
  authToken: string,
): Promise<any> => {
  const { data } = await axios.get(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}?access_token=${authToken}`,
  );
  return data;
};

const getMessagesList = async (
  authToken: string,
  // filter: unknown = {},
  // pageToken?: string,
): Promise<Array<any>> => {
  const ids = await getMessages(authToken);
  const messages = ids.map((id) => getMessageContent(id, authToken));
  const result = await Promise.allSettled(messages);
  return result;
};

export { getMessagesList };
