import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { MessagesSearchParams } from '../models/MessagesSearchParams';

export const useSearchParams = (): Record<
  string,
  string | Array<string> | null
> => {
  const location = useLocation();

  return queryString.parse(location.search);
};

export const useMessagesSearchString = (
  params?: Partial<MessagesSearchParams>,
): string => {
  const currentParams = useSearchParams();
  return queryString.stringify({ ...currentParams, ...params });
};
