import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Post.module.scss';
import classNames from 'classnames';

interface PostProps {
  single?: boolean;
  user?: string;
  title?: string;
  text?: string;
  dateAndTime?: string;
  id: string;
}

const isValidDate = (date: Date): boolean => {
  return date instanceof Date;
};

const getProperDate = (dateString?: string): string => {
  if (!dateString) {
    return '';
  }
  const date = new Date(dateString);
  if (!isValidDate(date)) {
    return '';
  }
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
};

export const Post: React.FC<PostProps> = ({
  single,
  user,
  text,
  title,
  dateAndTime,
  id,
}) => {
  const messageDate = getProperDate(dateAndTime);

  return (
    <section className="media">
      <div className="media-body">
        <div className="userInfo clearfix">
          <span>From: {user}</span>
          <div className="commentsAndTime pull-right">
            <span>
              <i className="icon-clock" />
              <time className="timeago" dateTime={messageDate} />
              {messageDate}
            </span>
          </div>
        </div>
        <div className="itemName">
          <Link
            to={{
              pathname: '/message',
              state: id,
            }}
            className="media-heading"
            title={title}
          >
            {title}
          </Link>
        </div>
        {single && text ? (
          <iframe
            className={classNames(styles.post__iframe)}
            title="message-content"
            allow="fullscreen"
            scrolling="yes"
            src={`data:text/html;charset=UTF-8;base64,${text}`}
          />
        ) : (
          <p>{text}</p>
        )}
      </div>
    </section>
  );
};
