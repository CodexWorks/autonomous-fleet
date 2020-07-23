import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowX: 'scroll',
        overflowY: 'scroll',
        height: '60vh',
        width: '65vw',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
