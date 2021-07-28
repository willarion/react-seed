import { UserPreviewMessage } from '../../src/models/UserPreviewMessage';

const defaultOptions: UserPreviewMessage = {
  id: '1',
  from: 'fake-user@mail.com',
  date: '2021-07-22T11:52:00Z',
  text: 'MOCK_MESSAGE_TEXT',
  title: 'MOCK_MESSAGE_TITLE',
};

export const createUserPreviewMessageStub = (
  options: Partial<UserPreviewMessage> = {},
): UserPreviewMessage => {
  return {
    ...defaultOptions,
    ...options,
  };
};
