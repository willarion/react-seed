import React from 'react';
import { Post } from '../Post/Post';
import useMessages from '../../hooks/useMessages/useMessages';
import styles from './PostContainer.module.scss';
import classNames from 'classnames';
import { Search } from '../Search/Search';
import { useInputValue } from '../../hooks/useInputValue/useInputValue';
import { makeGoogleSearchQuery } from '../../utils/makeGoogleSearchQuery';
import { useSearchParams } from '../../hooks/useSearchParams/useSearchParams';
import { NavigationButtons } from '../NavigationButtons/NavigationButtons';
import { CreateNewMessageBtn } from '../CreateNewMessageBtn/CreateNewMessageBtn';
import { last } from 'lodash';
// import { last } from 'lodash';

export const PostsContainer: React.FC = ({}) => {
  const search = useSearchParams();
  const { input, handleInput } = useInputValue();
  const memorizedFilter = React.useMemo(
    () => makeGoogleSearchQuery(search),
    [search],
  );

  const {
    messages,
    pageTokensList,
    getNextMessagesList,
    getPreviousMessagesList,
  } = useMessages(memorizedFilter);

  const goForward = () => {
    getNextMessagesList(memorizedFilter);
  };
  const goBack = () => {
    getPreviousMessagesList(memorizedFilter);
  };

  const isBackButtonDisabled = pageTokensList.length < 3;
  const isForwardButtonDisabled = last(pageTokensList) === '';

  return (
    <section
      className={classNames('postsContainer', styles.postsContainer_alone)}
    >
      <div className={classNames(styles.tools)}>
        <Search handleInput={handleInput} input={input} />
        <CreateNewMessageBtn pathname={'home/add'} />
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
      <NavigationButtons
        backButtonStatus={isBackButtonDisabled}
        forwardButtonStatus={isForwardButtonDisabled}
        onBack={goBack}
        onForward={goForward}
      />
    </section>
  );
};
