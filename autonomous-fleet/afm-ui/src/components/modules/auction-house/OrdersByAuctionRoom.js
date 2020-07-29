import React from 'react';
import { API } from '../../../utils/API';

import { useCookies } from 'react-cookie';

const handleClick = (id, companyID) => {
  API.post('/transport-order/update_order_state/', {
    id: id,
    company: companyID,
    user: 2,
  }).catch((error) => {
    console.log('Update order error: ' + error);
  });
};

const OrdersByAuctionRooms = (props) => {
  const cookies = useCookies(['companyData']);
  const cookieData = cookies[0].companyData;

  return props.orders.map((item, index) => {
    return (
      <tr className='flex-table indented-row' role='rowgroup' key={index}>
        <td className='flex-row' role='cell'>
          {item['pickup_from']} - {item['pickup_until']}
        </td>
        <td className='flex-row' role='cell'>
          {item['delivery_from']} - {item['delivery_until']}
        </td>
        <td className='flex-row' role='cell'>
          {item['volume']} &sup3;
        </td>
        <td className='flex-row' role='cell'>
          {item['weight']} kg
        </td>
        <td className='flex-row' role='cell'>
          {item['ldm']} ldm
        </td>
        <td className='flex-row' role='cell'>
          {item['pallets']}
        </td>
        <td className='flex-row' role='cell'>
          {item['delivery_address_id']}
        </td>
        <td className='flex-row' role='cell'>
          {item['price']} {item['currency']}
        </td>
        <td className='flex-row' role='cell'>
          {item['status']}
        </td>
        <td className='flex-row' role='cell'>
          <button
            disabled={
              item['status'] === 'Accepted' || !cookieData['is_supplier']
            }
            className='btn btn-primary'
            onClick={() => handleClick(item['id'], cookieData['id'])}
          >
            Accept
          </button>
        </td>
        {console.log(cookies)}
      </tr>
    );
  });
};

export default OrdersByAuctionRooms;
