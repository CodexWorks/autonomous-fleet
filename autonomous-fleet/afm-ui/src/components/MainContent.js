import React from 'react';

/* This component was used for example purposes, not part of AFM functionality */

const MainContent = ({ headline, body_text, pub_date }) => {
  return (
    <div className='mainContentStyle'>
      <h2>{headline}</h2>
      <p>{body_text}</p>
      <span>Published on: {pub_date}</span>
      <div className='line'></div>
    </div>
  );
};

export default MainContent;
