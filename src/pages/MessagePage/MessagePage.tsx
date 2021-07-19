import React from 'react';
import { Header } from '../../components/Header/Header';
import { Post } from '../../components/Post/Post';
import './MessagePage.css';
import { useSingleMessage } from '../../hooks/useSingleMessage';

export const MessagePage: React.FC = ({}) => {
  const { message, token } = useSingleMessage();

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
