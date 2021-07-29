import React from 'react';
import { Post } from '../../components/Post/Post';
import { useSingleMessage } from '../../hooks/useSingleMessage/useSingleMessage';
import { useLoading } from '../../hooks/useLoading/useLoading';
import { Loader } from '../../components/Loader/Loader';
import classNames from 'classnames';
import styles from './MessagePage.module.css';

export const MessagePage: React.FC = () => {
  const { isLoading, handleLoading } = useLoading();
  const { message } = useSingleMessage(handleLoading);

  return (
    <section className={classNames('message-page', styles.mainContent)}>
      {isLoading ? (
        <Loader small={false} />
      ) : (
        message && (
          <Post
            single={true}
            key={message.id}
            id={message.id}
            user={message.from}
            title={message.title}
            text={message.html}
            dateAndTime={message.date}
          />
        )
      )}
    </section>
  );
};
