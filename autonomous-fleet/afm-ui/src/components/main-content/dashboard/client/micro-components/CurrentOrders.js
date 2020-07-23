import React from 'react';

const CurrentOrders = (props) => {
  // Parsing props keys and returning key & value for each one
  return Object.keys(props).map((key, i) => {
    return (
      <p key={i}>
        <strong>{key}: </strong> {props[key]}
      </p>
    );
  });
};

export default CurrentOrders;
