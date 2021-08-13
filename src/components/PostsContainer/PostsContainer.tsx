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
import { useLoading } from '../../hooks/useLoading/useLoading';
import { Loader } from '../Loader/Loader';

export const PostsContainer: React.FC = ({}) => {
  const search = useSearchParams();
  const { input, handleInput, resetInput } = useInputValue();
  const memorizedFilter = React.useMemo(
    () => makeGoogleSearchQuery(search),
    [search],
  );
  const { isLoading, handleLoading } = useLoading();

  const {
    messages,
    pageTokensList,
    getNextMessagesList,
    getPreviousMessagesList,
    deletePost,
  } = useMessages(memorizedFilter, handleLoading);

  const goForward = () => {
    getNextMessagesList(memorizedFilter);
  };
  const goBack = () => {
    getPreviousMessagesList(memorizedFilter);
  };

  const isBackButtonDisabled = pageTokensList.length < 3;
  const isForwardButtonDisabled =
    last(pageTokensList) === '' || last(pageTokensList) === '0';

  return (
    <section
      className={classNames('postsContainer', styles.postsContainer_alone)}
    >
      <div className={classNames(styles.tools)}>
        <Search
          resetInput={resetInput}
          handleInput={handleInput}
          input={input}
        />
        <CreateNewMessageBtn pathname={'home/add'} />
      </div>
      <div className={classNames(styles.main)}>
        {isLoading ? (
          <Loader small={false} />
        ) : (
          messages.map((message) => (
            <Post
              key={message.id}
              id={message.id}
              user={message.from}
              title={message.title}
              text={message.text}
              dateAndTime={message.date}
              onPostDelete={deletePost}
            />
          ))
        )}
      </div>
      <NavigationButtons
        backButtonStatus={isBackButtonDisabled}
        forwardButtonStatus={isForwardButtonDisabled}
        onBack={goBack}
        onForward={goForward}
      />
    </section>
  );
};
