import React from 'react';
import { Post } from '../Post/Post';
import { NavigationButtons } from '../NavigationButtons/NavigationButtons';

export const PostsContainer: React.FC = ({}) => {
  const posts = [
    {
      id: 1,
      avatar: 'images/member1.png',
      user: 'User Name',
      tags: [
        {
          id: 1,
          tag: 'tag1',
        },
        {
          id: 2,
          tag: 'tag2',
        },
        {
          id: 3,
          tag: 'tag3',
        },
      ],
      text: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.',
      title: 'Item title 1i',
      rank: 'Pro',
      isRead: true,
      commentsNumber: 1,
      dateAndTime: '2015-06-14T09:24:17Z',
    },
    {
      id: 2,
      avatar: 'images/member2.png',
      user: 'User Name',
      tags: [
        {
          id: 1,
          tag: 'tag1',
        },
        {
          id: 2,
          tag: 'tag2',
        },
        {
          id: 3,
          tag: 'tag3',
        },
      ],
      text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.',
      title: 'Item title 1i',
      rank: 'Member',
      isRead: false,
      commentsNumber: 4,
      dateAndTime: '2015-06-14T09:24:17Z',
    },
    {
      id: 3,
      avatar: 'images/member3.png',
      user: 'User Name',
      tags: [
        {
          id: 1,
          tag: 'tag1',
        },
        {
          id: 2,
          tag: 'tag2',
        },
        {
          id: 3,
          tag: 'tag3',
        },
      ],
      text: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.',
      title: 'Item title 1i',
      rank: 'Member',
      isRead: false,
      commentsNumber: 3,
      dateAndTime: '2015-06-14T09:24:17Z',
    },
    {
      id: 4,
      avatar: 'images/member4.png',
      user: 'User Name',
      tags: [
        {
          id: 1,
          tag: 'tag1',
        },
        {
          id: 2,
          tag: 'tag2',
        },
        {
          id: 3,
          tag: 'tag3',
        },
      ],
      text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.',
      title: 'Item title 1i',
      rank: 'Member',
      isRead: false,
      commentsNumber: 2,
      dateAndTime: '2015-06-14T09:24:17Z',
    },
  ];

  return (
    <section className="postsContainer">
      {posts.map((post) => (
        <Post
          key={post.id}
          avatar={post.avatar}
          user={post.user}
          title={post.title}
          text={post.text}
          rank={post.rank}
          tags={post.tags}
          isRead={post.isRead}
          commentsNumber={post.commentsNumber}
          dateAndTime={post.dateAndTime}
        />
      ))}
      <NavigationButtons />
    </section>
  );
};
