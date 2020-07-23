import React, { Fragment } from 'react';

const OrdersByAuctionRooms = (props) => {
  return props.orders.map((item, index) => {
    return (
      <Fragment>
        <div className='orderPickupDate'>
          {item['pickup_from']} - {item['pickup_until']}
        </div>
        <div className='orderDeliveryDate'>
          {item['delivery_from']} - {item['delivery_until']}
        </div>
        <div className='orderVolume'>{item['volume']} &sup3;</div>
        <div className='orderWeight'>{item['weight']} kg</div>
        <div className='orderLdm'>{item['ldm']} ldm</div>
        <div className='orderPallets'>{item['pallets']}</div>
        <div className='orderDeliveryAddress'>
          {item['delivery_address_id']}
        </div>
        <div className='orderPrice'>
          {item['price']} {item['currency']}
        </div>
      </Fragment>
    );
  });
};

export default OrdersByAuctionRooms;
