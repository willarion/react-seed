import React from 'react';

export const useNextPageToken = (): {
  pageToken: Array<string>;
  saveOnePageToken: (apiPageToken: string) => void;
  saveMorePageToken: (apiPageToken: string) => void;
  saveLessPageTokens: (lessTokens: Array<string>) => void;
} => {
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
