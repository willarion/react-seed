import React from 'react';

export interface NextPageTokenApi {
  pageTokensList: Array<string>;
  saveOnePageToken: (apiPageToken: string) => void;
  saveMorePageToken: (apiPageToken: string) => void;
  saveLessPageTokens: (lessTokens: Array<string>) => void;
}

export const useNextPageToken = (): NextPageTokenApi => {
  const [pageTokensList, setPageTokensList] = React.useState<Array<string>>([
    '0',
  ]);

  const saveOnePageToken = (apiPageToken: string) => {
    setPageTokensList([apiPageToken]);
  };

  const saveMorePageToken = (apiPageToken: string) => {
    setPageTokensList([...pageTokensList, apiPageToken]);
  };

  return {
    pageTokensList,
    saveOnePageToken,
    saveMorePageToken,
    saveLessPageTokens: setPageTokensList,
  };
};
