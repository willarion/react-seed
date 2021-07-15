import React from 'react';

interface PostsProps {
  user: string;
  title: string;
  text: string;
  dateAndTime: string;
}

function getProperDate(dateString: string): string {
  const date = new Date(dateString);
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

export const Post: React.FC<PostsProps> = ({
  user,
  text,
  title,
  dateAndTime,
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
          todo change a to link and path to proper one
          <a href="index.html" className="media-heading" title="Item title">
            {title}
          </a>
        </div>
        <p>{text}</p>
      </div>
    </section>
  );
};
