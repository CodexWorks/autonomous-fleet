import React, { Fragment } from 'react';
import CurrentOrders from './CurrentOrders';

const CurrentOrdersList = ({ currentOrders }) => {
  return (
    <Fragment>
      {/* parsing current order array returned by GET method */}
      {currentOrders.map((text, i) => {
        return (
          <CurrentOrders
            key={i}
            orderId={currentOrders[i].transport_order_id}
            pickupFrom={currentOrders[i].pickup_from}
            pickupUntil={currentOrders[i].pickup_until}
            deliveryFrom={currentOrders[i].delivery_from}
            deliveryUntil={currentOrders[i].delivery_until}
            pickupAddressId={currentOrders[i].pickup_address_id}
            deliveryAddressId={currentOrders[i].delivery_address_id}
            price={currentOrders[i].price}
            currency={currentOrders[i].currency}
            pallets={currentOrders[i].pallets}
            weight={currentOrders[i].weight}
            ldm={currentOrders[i].ldm}
            volume={currentOrders[i].volume}
          />
        );
      })}
    </Fragment>
  );
};

export default CurrentOrdersList;
