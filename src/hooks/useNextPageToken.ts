import React from 'react';

export const useNextPageToken = (): {
  pageToken: Array<string>;
  savePageToken: (apiPageToken: string) => void;
} => {
  const [pageToken, setPageToken] = React.useState<Array<string>>([]);

  const savePageToken = (apiPageToken: string) => {
    console.log(apiPageToken);

    setPageToken([...pageToken, apiPageToken]);
  };

  return { pageToken, savePageToken };
};
