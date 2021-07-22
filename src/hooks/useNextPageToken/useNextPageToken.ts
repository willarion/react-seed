import React from 'react';

export interface NextPageTokenApi {
  pageToken: Array<string>;
  saveOnePageToken: (apiPageToken: string) => void;
  saveMorePageToken: (apiPageToken: string) => void;
  saveLessPageTokens: (lessTokens: Array<string>) => void;
}

export const useNextPageToken = (): NextPageTokenApi => {
  const [pageToken, setPageToken] = React.useState<Array<string>>(['0']);

  const saveOnePageToken = (apiPageToken: string) => {
    setPageToken([apiPageToken]);
  };

  const saveMorePageToken = (apiPageToken: string) => {
    setPageToken([...pageToken, apiPageToken]);
  };

  const saveLessPageTokens = (lessTokens: Array<string>) => {
    setPageToken(lessTokens);
  };

  return { pageToken, saveOnePageToken, saveMorePageToken, saveLessPageTokens };
};
