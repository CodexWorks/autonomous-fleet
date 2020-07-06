import React, { Fragment } from 'react';

// new || assigned || active || completed || canceled

const CurrentOrders = ({
  orderId,
  pickupFrom,
  pickupUntil,
  deliveryFrom,
  deliveryUntil,
  pickupAddressId,
  deliveryAddressId,
  price,
  currency,
  pallets,
  weight,
  ldm,
  volume,
}) => {
  return (
    <Fragment>
      <p>Order ID: {orderId}</p>
      <p>Pick-up From: {pickupFrom}</p>
      <p>Pick-up Untill: {pickupUntil}</p>
      <p>Delivery From: {deliveryFrom}</p>
      <p>Delivery Untill: {deliveryUntil}</p>
      <p>Pick-up Address ID: {pickupAddressId}</p>
      <p>Delivery Address ID: {deliveryAddressId}</p>
      <p>
        Price: {price} {currency}
      </p>
      <p>Pallets: {pallets}</p>
      <p>Weight: {weight}</p>
      <p>LDM: {ldm}</p>
      <p>Volume: {volume}</p>
    </Fragment>
  );
};

export default CurrentOrders;
