import React, { Fragment } from 'react';

const CurrentAuctionRooms = (props) => {
  return (
    <Fragment>
      {props.auctionRooms.map((item, index) => {
        return (
          <Fragment key={index}>
            <div className='auctionRoomName'>{item['name']}</div>
            <div className='auctionRoomCompany'>{item['company']}</div>
            <div className='auctionRoomDescription'>{item['description']}</div>
            <div className='auctionRoomDate'>{item['creation_date']}</div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default CurrentAuctionRooms;
