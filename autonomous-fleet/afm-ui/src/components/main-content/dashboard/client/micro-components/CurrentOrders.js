import React, { Fragment } from 'react';

// new || assigned || active || completed

const CurrentOrders = ({
  orderId,
  pickupFrom,
  pickupUntil,
  deliveryFrom,
  deliveryUntil,
  pickupAddressId,
  deliveryAddressId,
  status,
  customerId,
  supplierId,
  price,
  currency,
  pallets,
  weight,
  ldm,
  volume,
}) => {
  return (
    <Fragment>
      <p>{orderId}</p>
      <p>{pickupFrom}</p>
      <p>{pickupUntil}</p>
      <p>{deliveryFrom}</p>
      <p>{deliveryUntil}</p>
      <p>{pickupAddressId}</p>
      <p>{deliveryAddressId}</p>
      <p>{status}</p>
      <p>{customerId}</p>
      <p>{supplierId}</p>
      <p>{price}</p>
      <p>{currency}</p>
      <p>{pallets}</p>
      <p>{weight}</p>
      <p>{ldm}</p>
      <p>{volume}</p>
    </Fragment>
  );
};

export default CurrentOrders;
