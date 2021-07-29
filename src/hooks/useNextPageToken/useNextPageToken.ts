import React from 'react';
import { last } from 'lodash';

export interface NextPageTokenApi {
  pageTokensList: Array<string>;
  makeNewPageTokensList: (apiPageToken: string) => void;
  saveMorePageToken: (apiPageToken: string) => void;
  saveLessPageTokens: (lessTokens: Array<string>) => void;
}

export const useNextPageToken = (): NextPageTokenApi => {
  const [pageTokensList, setPageTokensList] = React.useState<Array<string>>([
    '0',
  ]);

  const makeNewPageTokensList = (apiPageToken: string) => {
    setPageTokensList(['0', apiPageToken]);
  };

  const saveMorePageToken = (apiPageToken: string) => {
    if (last(pageTokensList) === '') {
      return;
    }
    setPageTokensList([...pageTokensList, apiPageToken]);
  };

  return {
    pageTokensList,
    makeNewPageTokensList,
    saveMorePageToken,
    saveLessPageTokens: setPageTokensList,
  };
};
