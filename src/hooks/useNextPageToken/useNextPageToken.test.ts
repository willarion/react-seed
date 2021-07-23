import { renderHook, act } from '@testing-library/react-hooks';
import { useNextPageToken } from './useNextPageToken';

describe('hook functions should set proper value to state', () => {
  it('should save one pageToken', () => {
    const { result } = renderHook(() => useNextPageToken());

    act(() => {
      result.current.makeNewPageTokensList('123456789');
    });

    expect(result.current.pageTokensList).toStrictEqual(['0', '123456789']);
  });

  it('should add new pageToken in array with previous ones', () => {
    const { result } = renderHook(() => useNextPageToken());

    act(() => {
      result.current.saveMorePageToken('123456789');
    });

    expect(result.current.pageTokensList).toStrictEqual(['0', '123456789']);
  });

  it('should save new array with pageToken instead of previous one', () => {
    const { result } = renderHook(() => useNextPageToken());

    act(() => {
      result.current.saveMorePageToken('123456789');
    });

    expect(result.current.pageTokensList).toStrictEqual(['0', '123456789']);
  });
});
