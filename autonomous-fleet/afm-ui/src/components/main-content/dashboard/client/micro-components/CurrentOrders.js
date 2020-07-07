import React, { Fragment } from 'react';

// new || assigned || active || completed || canceled

const CurrentOrders = (props) => {
  return Object.keys(props).map((key) => {
    return (
      <p>
        <strong>{key}: </strong> {props[key]}
      </p>
    );
  });
};

export default CurrentOrders;
