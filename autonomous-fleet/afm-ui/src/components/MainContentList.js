import React, { Fragment } from 'react';
import MainContent from './MainContent';

const MainContentList = ({ posts }) => {
  return (
    <Fragment>
      {posts.map((text, i) => {
        return (
          <MainContent
            key={i}
            // id={posts[i].id}
            headline={posts[i].headline}
            body_text={posts[i].body_text}
            pub_date={posts[i].pub_date}
          />
        );
      })}
    </Fragment>
  );
};

export default MainContentList;
