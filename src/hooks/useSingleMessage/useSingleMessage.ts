import React from 'react';
import { useLocation } from 'react-router-dom';
import useAuthToken from '../useAuthToken/useAuthToken';
import { getMessageContent } from '../../api/api';
import { getUsefullFulltextMessageFields } from '../../utils/getUsefulMessagePreviewFields';
import { UserFulltextMessage } from '../../models/UserFulltextMessage';
import { LoadingHandler } from '../../models/LoadingHandler';

export const useSingleMessage = (
  handleLoading: LoadingHandler['handleLoading'],
): {
  message: UserFulltextMessage | null;
  token: string;
} => {
  const location = useLocation();
  const id = location.state;
  const token = useAuthToken();

  const [message, setMessage] = React.useState<UserFulltextMessage | null>(
    null,
  );

  React.useEffect(() => {
    if (token !== '') {
      handleLoading(true);
      getMessageContent(id, token)
        .then((res) => {
          setMessage(getUsefullFulltextMessageFields(res));
        })
        .catch((error) => console.log(error))
        .finally(() => handleLoading(false));
    }
  }, [id, token, handleLoading]);

  return { message, token };
};
