import React, { Fragment } from 'react';
import axios from 'axios'

import { useCookies } from 'react-cookie'

const handleClick = (id, companyID) =>{
  axios
    .post('http://127.0.0.1:8000/api/transport-order/update_order_state/', {
      'id': id, 
      'company': companyID, 
      'user': 2
    })
    .catch((error) => {
      console.log('Update order error: ' + error);
    });
}

const OrdersByAuctionRooms = (props) => {
  const cookies = useCookies(['companyData']);
  const cookieData = cookies[0].companyData

  return props.orders.map((item, index) => {
    return (
      <Fragment key={index}>
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
        <div className='orderStatus'>{item['status']}</div>
        <div className='orderAccept'>
          <button 
            disabled={item['status'] === 'Accepted' || !cookieData['is_supplier']}
            className='btn btn-dark'
            onClick={() => handleClick(item['id'], cookieData['id'])}
          >
              Accept
          </button>
        </div>
        
      {console.log(cookies)}
      </Fragment>
    );
  });
};

export default OrdersByAuctionRooms;
