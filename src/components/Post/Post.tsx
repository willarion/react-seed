import React from 'react';

interface PostsProps {
  avatar: string;
  user: string;
  title: string;
  text: string;
  rank: string;
  tags: { tag: string; id: number }[];
  isRead: boolean;
  commentsNumber: number;
  dateAndTime: string;
}

export const Post: React.FC<PostsProps> = ({
  avatar,
  user,
  tags,
  text,
  title,
  rank,
  isRead,
  commentsNumber,
  dateAndTime,
}) => {
  const getPostAge = (data: string) => {
    const postTime = new Date(data);
    const currentTime = new Date(Date.now());

    return currentTime.getFullYear() - postTime.getFullYear() + 'Y';
  };

  return (
    <section className="media">
      <div className="media-left">
        <a href="index.html">
          <img className="media-object" src={avatar} alt="userpic" />
        </a>
      </div>
      <div className="media-body">
        <div className="userInfo clearfix">
          <span>{user}</span>
          <span className="rank">{rank}</span>
          <div className="commentsAndTime pull-right">
            <a href="index.html">
              <i className="icon-chat" />
              {commentsNumber}
            </a>
            <span>
              <i className="icon-clock" />
              <time className="timeago" dateTime={dateAndTime} />
              {getPostAge(dateAndTime)}
            </span>
          </div>
        </div>
        <div className="itemName">
          <a href="index.html" className="media-heading" title="Item title">
            {title}
          </a>
          {isRead && <span className="status pull-right"></span>}
        </div>
        <p>{text}</p>
        <div className="tags">
          <button type="submit" className="btn btn-tag">
            <i className="icon-tag" />
          </button>
          {tags.map((tag) => (
            <a href="index.html" className="tag" title="tag" key={tag.id}>
              {` ${tag.tag}`}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
