import React from 'react';
import { Header } from '../../components/Header/Header';
import { Post } from '../../components/Post/Post';
import './MessagePage.css';
import { useSingleMessage } from '../../hooks/useSingleMessage/useSingleMessage';

export const MessagePage: React.FC = ({}) => {
  const { message } = useSingleMessage();

  return (
    <section className="message-page">
      <Header />
      {message && (
        <Post
          single={true}
          key={message.id}
          id={message.id}
          user={message.from}
          title={message.title}
          text={message.html}
          dateAndTime={message.date}
        />
      )}
    </section>
  );
};
