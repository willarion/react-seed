import React from 'react';
import { useLocation } from 'react-router-dom';
import useAuthToken from '../useAuthToken/useAuthToken';
import { getMessageContent } from '../../api/api';
import { getUsefullFulltextMessageFields } from '../../utils/getUsefulMessagePreviewFields';
import { UserFulltextMessage } from '../../models/UserFulltextMessage';

export const useSingleMessage = (): {
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
      getMessageContent(id, token).then((res) => {
        if (res.payload.parts[1].body.data) {
          setMessage(getUsefullFulltextMessageFields(res));
        }
      });
    }
  }, [id, token]);

  return { message, token };
};
