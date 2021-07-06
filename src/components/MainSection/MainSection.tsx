import React from 'react';
import { MainHeading } from '../MainHeading/MainHeading';
import { Search } from '../Search/Search';
import { PostsContainer } from '../PostsContainer/PostsContainer';
import { Footer } from '../Footer/Footer';

export const MainSection: React.FC = () => {
  return (
    <section className="mainSection">
      <MainHeading heading={'Page title'} />
      <Search />
      <PostsContainer />
      <Footer />
    </section>
  );
};
