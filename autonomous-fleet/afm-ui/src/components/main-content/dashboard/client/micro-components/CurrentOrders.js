import React, { Fragment } from 'react';

const CurrentOrders = (props) => {
  // Parsing props keys nad returning key & value for each one
  return Object.keys(props).map((key) => {
    return (
      <p>
        <strong>{key}: </strong> {props[key]}
      </p>
    );
  });
};

export default CurrentOrders;
