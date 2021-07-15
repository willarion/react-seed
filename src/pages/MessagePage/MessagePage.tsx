import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { getMessageContent } from '../../api/api';
import useAuthToken from '../../hooks/useAuthToken';
import { getUsefulMessageFields } from '../../utils/getUsefulMessageFields';
import { Post } from '../../components/Post/Post';
import { UserMessage } from '../../models/UserMessage';
import './MessagePage.css';

export const MessagePage: React.FC = ({}) => {
  const location = useLocation();
  const id = location.state;
  const token = useAuthToken();

  const [message, setMessage] = React.useState<UserMessage | null>(null);

  React.useEffect(() => {
    if (token !== '') {
      getMessageContent(id, token).then((res) => {
        console.log(res);
        setMessage(getUsefulMessageFields(res, false));
      });
    }
  }, [id, token]);

  return (
    <section className="message-page">
      <Header />
      {message && token && (
        <Post
          key={message.id}
          id={message.id}
          user={message.from}
          title={message.title}
          text={message.text}
          dateAndTime={message.date}
        />
      )}
    </section>
  );
};
