import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { MessagesSearchParams } from '../../models/MessagesSearchParams';

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

export const useResetCategories = (): string => {
  const currentParams = useSearchParams();
  const onlyLabes = {
    label: currentParams.label,
    search: currentParams.search,
  };
  return queryString.stringify(onlyLabes);
};

export const useResetLabels = (): string => {
  const currentParams = useSearchParams();
  const onlyCategories = {
    category: currentParams.category,
    search: currentParams.search,
  };
  return queryString.stringify(onlyCategories);
};

export const useResetSearch = (): string => {
  const currentParams = useSearchParams();
  const onlyLabes = {
    label: currentParams.label,
    categories: currentParams.categories,
  };
  return queryString.stringify(onlyLabes);
};
