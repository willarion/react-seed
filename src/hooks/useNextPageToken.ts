import React from 'react';

export const useNextPageToken = (): {
  pageToken: Array<string>;
  savePageToken: (apiPageToken: string) => void;
  deletePageToken: () => void;
} => {
  const [pageToken, setPageToken] = React.useState<Array<string>>([]);

  const savePageToken = (apiPageToken: string) => {
    setPageToken([...pageToken, apiPageToken]);
  };

  const deletePageToken = () => {
    setPageToken([]);
  };

  return { pageToken, savePageToken, deletePageToken };
};
