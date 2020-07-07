import React, { Fragment } from 'react';
import MainContent from './MainContent';

/** This component was used for example purposes, not part of AFM functionality */

const MainContentList = ({ posts }) => {
  return (
    <Fragment>
      {/* parsing current order array returned by GET method */}
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
