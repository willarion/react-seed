import { mocked } from 'ts-jest/utils';
import useAuthToken from '../useAuthToken/useAuthToken';
import { getMessagesList, UserMessagesInfo } from '../../api/api';
import { createUserPreviewMessageStub } from '../../../test/stubs/userPreviewMessage';
import {
  NextPageTokenApi,
  useNextPageToken,
} from '../useNextPageToken/useNextPageToken';
import { renderHook, act } from '@testing-library/react-hooks';
import useMessages from './useMessages';

jest.mock('../useAuthToken/useAuthToken');
jest.mock('../../api/api');
jest.mock('../useNextPageToken/useNextPageToken');

const AUTH_TOKEN = 'MOCK_TOKEN';
const NEXT_PAGE_TOKEN = 'NEXT_PAGE_TOKEN';

const mockResponse: UserMessagesInfo = {
  pageToken: NEXT_PAGE_TOKEN,
  messagesList: [
    createUserPreviewMessageStub({ id: '1' }),
    createUserPreviewMessageStub({ id: '2' }),
    createUserPreviewMessageStub({ id: '3' }),
    createUserPreviewMessageStub({ id: '4' }),
  ],
};

const CURRENT_PAGE_TOKEN = 'CURRENT_PAGE_TOKEN';

const nextPageTokenStub: NextPageTokenApi = {
  pageTokensList: [CURRENT_PAGE_TOKEN, CURRENT_PAGE_TOKEN, CURRENT_PAGE_TOKEN],
  makeNewPageTokensList: jest.fn(),
  saveMorePageToken: jest.fn(),
  saveLessPageTokens: jest.fn(),
};

const previosInvalidPageTokenStub: NextPageTokenApi = {
  pageTokensList: [CURRENT_PAGE_TOKEN],
  makeNewPageTokensList: jest.fn(),
  saveMorePageToken: jest.fn(),
  saveLessPageTokens: jest.fn(),
};

const OLD_FILTER = 'SOME_FILTER';

describe('hooks/useMessages', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mocked(useAuthToken).mockImplementation(() => AUTH_TOKEN);
    mocked(getMessagesList).mockImplementation(() =>
      Promise.resolve(mockResponse),
    );
    mocked(useNextPageToken).mockImplementation(() => nextPageTokenStub);
  });

  it('should load message on initial render', async () => {
    const filter = 'INITIAL_FILTER';
    const { waitForNextUpdate, result } = renderHook(() => useMessages(filter));

    expect(result.current.messages).toEqual([]);
    expect(useAuthToken).toHaveBeenCalled();
    expect(getMessagesList).toHaveBeenCalledWith(AUTH_TOKEN, filter);

    await waitForNextUpdate();

    expect(result.current.messages).toEqual(mockResponse.messagesList);
    expect(nextPageTokenStub.makeNewPageTokensList).toHaveBeenCalledWith(
      mockResponse.pageToken,
    );
  });

  it('should reset on error', async () => {
    const { waitForNextUpdate, result, rerender } = renderHook(
      (filter: string) => useMessages(filter),
    );

    await waitForNextUpdate();

    expect(result.current.messages).toEqual(mockResponse.messagesList);

    const error = new Error('get message list error');
    mocked(getMessagesList).mockImplementationOnce(() => Promise.reject(error));

    rerender('next_filter');

    await waitForNextUpdate();

    expect(result.current.messages).toEqual([]);
  });

  it('should return pageToken from useNextPageToken hook', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useMessages(''));
    expect(result.current.pageTokensList).toEqual(
      nextPageTokenStub.pageTokensList,
    );
    await waitForNextUpdate();
  });

  it('should update to next messages and list of tokens', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useMessages(''));

    expect(getMessagesList).toBeCalledTimes(1);

    await act(async () => {
      result.current.getNextMessagesList(OLD_FILTER);
      await waitForNextUpdate();
      expect(getMessagesList).toHaveBeenCalledWith(
        AUTH_TOKEN,
        OLD_FILTER,
        CURRENT_PAGE_TOKEN,
      );

      expect(getMessagesList).toBeCalledTimes(2);
      expect(result.current.pageTokensList).toEqual(
        nextPageTokenStub.pageTokensList,
      );
      expect(result.current.messages).toEqual(mockResponse.messagesList);
    });
  });

  it('should update to previous messages and list of tokens', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useMessages(''));

    expect(getMessagesList).toBeCalledTimes(1);

    await act(async () => {
      result.current.getPreviousMessagesList(OLD_FILTER);
      await waitForNextUpdate();
      expect(getMessagesList).toHaveBeenCalledWith(
        AUTH_TOKEN,
        OLD_FILTER,
        CURRENT_PAGE_TOKEN,
      );

      expect(getMessagesList).toBeCalledTimes(2);

      expect(result.current.pageTokensList).toEqual(
        nextPageTokenStub.pageTokensList,
      );
      expect(result.current.messages).toEqual(mockResponse.messagesList);
    });
  });

  it('should return if there is no previous token', async () => {
    mocked(useNextPageToken).mockImplementationOnce(
      () => previosInvalidPageTokenStub,
    );

    const { result, waitForNextUpdate } = renderHook(() => useMessages(''));

    expect(getMessagesList).toBeCalledTimes(1);

    await act(async () => {
      result.current.getPreviousMessagesList(OLD_FILTER);
      await waitForNextUpdate();
      expect(getMessagesList).not.toHaveBeenCalledWith(
        AUTH_TOKEN,
        OLD_FILTER,
        CURRENT_PAGE_TOKEN,
      );
      expect(getMessagesList).toHaveBeenCalledTimes(1);
    });
  });
});
