import React from 'react';
import { Post } from '../Post/Post';
import useMessages from '../../hooks/useMessages';
import styles from './PostContainer.module.scss';
import classNames from 'classnames';

//todo import { NavigationButtons } from '../NavigationButtons/NavigationButtons';

export const PostsContainer: React.FC = ({}) => {
  const messages = useMessages();
  return (
    <section
      className={classNames('postsContainer', styles.postsContainer_alone)}
    >
      {messages.map((message) => (
        <Post
          key={message.id}
          id={message.id}
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
