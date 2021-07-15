import React from 'react';
import { Post } from '../Post/Post';
import useMessages from '../../hooks/useMessages';
import useAuthToken from '../../hooks/useAuthToken';
//todo import { NavigationButtons } from '../NavigationButtons/NavigationButtons';

export const PostsContainer: React.FC = ({}) => {
  const token = useAuthToken();
  const messages = useMessages(token);
  return (
    <section className="postsContainer" style={{ padding: '20px' }}>
      {messages.map((message) => (
        <Post
          key={message.id}
          user={message.from}
          title={message.title}
          text={message.text}
          dateAndTime={message.date}
        />
      ))}
      {/*todo <NavigationButtons />*/}
    </section>
  );
};
