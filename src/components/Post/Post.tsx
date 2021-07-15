import React from 'react';
import { Link } from 'react-router-dom';

interface PostsProps {
  user?: string;
  title?: string;
  text?: string;
  dateAndTime?: string;
  id: string;
}

const getProperDate = (dateString?: string): string => {
  if (!dateString) {
    return '';
  }
  const date = new Date(dateString);
  if (date.getDate() !== date.getDate()) {
    return '';
  }
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};

export const Post: React.FC<PostsProps> = ({
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
          {/*todo change a to link and path to proper one*/}
          <Link
            to={{
              pathname: '/message',
              state: id,
            }}
            className="media-heading"
            title="Item title"
          >
            {title}
          </Link>
        </div>
        <p>{text}</p>
      </div>
    </section>
  );
};
