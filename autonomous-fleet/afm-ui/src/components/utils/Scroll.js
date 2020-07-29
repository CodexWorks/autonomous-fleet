import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowX: 'scroll',
        overflowY: 'scroll',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
