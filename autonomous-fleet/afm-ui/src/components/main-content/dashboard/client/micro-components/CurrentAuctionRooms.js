import React, { Fragment } from 'react';
import OrdersByAuctionRooms from './OrdersByAuctionRoom';

const CurrentAuctionRooms = (props) => {
  return (
    <Fragment>
      {props.auctionRooms.map((item, index) => {
        return (
          <Fragment>
            <tr key={index}>
              <td>{item['name']}</td>
              <td>{item['company']}</td>
              <td>{item['description']}</td>
              <td>{item['creation_date']}</td>
            </tr>
            <div>
              <OrdersByAuctionRooms />
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default CurrentAuctionRooms;
