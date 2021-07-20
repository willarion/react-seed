import React from 'react';
import { Post } from '../Post/Post';
import useMessages from '../../hooks/useMessages';
import styles from './PostContainer.module.scss';
import classNames from 'classnames';
import { Search } from '../Search/Search';
import { useInputValue } from '../../hooks/useInputValue';
import { makeGoogleSearchQuery } from '../../utils/makeGoogleSearchQuery';
import { useSearchParams } from '../../hooks/useSearchParams';
import { NavigationButtons } from '../NavigationButtons/NavigationButtons';

export const PostsContainer: React.FC = ({}) => {
  const search = useSearchParams();
  const { input, handleInput } = useInputValue();
  const memorizedFilter = React.useMemo(
    () => makeGoogleSearchQuery(search),
    [search],
  );

  const { messages, pageToken, getNextMessagesList, getPreviousMessagesList } =
    useMessages(memorizedFilter);

  const goForward = () => {
    getNextMessagesList(memorizedFilter);
  };
  const goBack = () => {
    getPreviousMessagesList(memorizedFilter);
  };
  const isBackButtonActive = !(pageToken.length > 1);

  return (
    <section
      className={classNames('postsContainer', styles.postsContainer_alone)}
    >
      <div className={classNames(styles.tools)}>
        <Search handleInput={handleInput} input={input} />
        <NavigationButtons
          onBackButton={isBackButtonActive}
          onBack={goBack}
          onForward={goForward}
        />
      </div>
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
    </section>
  );
};
