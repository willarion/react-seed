import React from 'react';

export const useNextPageToken = (): {
  pageTokensList: Array<string>;
  saveOnePageToken: (apiPageToken: string) => void;
  saveMorePageToken: (apiPageToken: string) => void;
  saveLessPageTokens: (lessTokens: Array<string>) => void;
} => {
  const [pageTokensList, setPageTokensList] = React.useState<Array<string>>([
    '0',
  ]);

  const saveOnePageToken = React.useCallback((apiPageToken: string) => {
    setPageTokensList([apiPageToken]);
  }, []);

  const saveMorePageToken = React.useCallback(
    (apiPageToken: string) => {
      setPageTokensList([...pageTokensList, apiPageToken]);
    },
    [pageTokensList],
  );

  return {
    pageTokensList,
    saveOnePageToken,
    saveMorePageToken,
    saveLessPageTokens: setPageTokensList,
  };
};
