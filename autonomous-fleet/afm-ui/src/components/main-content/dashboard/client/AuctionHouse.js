import React from 'react';
import axios from 'axios';

import CurrentAuctionRooms from './micro-components/CurrentAuctionRooms';
import OrdersByAuctionRooms from './micro-components/OrdersByAuctionRoom';
import Scroll from '../../../Scroll';

// ############### Constructor ###############
export default class CurrentCompanies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [2],
      auctionRooms: [],
      orders: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://127.0.0.1:8000/api/auction-room/get_auction_rooms', {
        params: {
          id: this.state.user[0],
        },
      })
      .then((res) => {
        this.setState({
          auctionRooms: res.data,
        });
      })
      .catch((error) => {
        console.log('GET user auction room error: ' + error);
      });

    axios
      .get('http://127.0.0.1:8000/api/transport-order')
      .then((res) => {
        this.setState({
          orders: res.data,
        });
      })
      .catch((error) => {
        console.log('get orders for ARs err ' + error);
      });
  }

  // ############# RENDER ###########

  render() {
    return (
      <div>
        <h3>Auction Rooms</h3>
        <Scroll>
          <div className='auctionRoomsContainer'>
            <hr className='fancy-line' />
            <div className='auctionRoomsGridContainer'>
              <div className='auctionRoomCol1'>Name</div>
              <div className='auctionRoomCol2'>Company</div>
              <div className='auctionRoomCol3'>Description</div>
              <div className='auctionRoomCol4'>Creation</div>
              <CurrentAuctionRooms auctionRooms={this.state.auctionRooms} />
            </div>
            <hr className='fancy-line' />
            <div className='ordersGridContainer'>
              <div className='orderCol1'>Pick-up (from-until)</div>
              <div className='orderCol2'>Delivery (from-until)</div>
              <div className='orderCol3'>Volume</div>
              <div className='orderCol4'>Weight</div>
              <div className='orderCol5'>LDM</div>
              <div className='orderCol6'>Pallets</div>
              <div className='orderCol7'>Address</div>
              <div className='orderCol8'>Price</div>
              <div className='orderCol9'>Status</div>
              <div className='orderCol10'>Accept</div>
              <OrdersByAuctionRooms orders={this.state.orders} />
            </div>
          </div>
        </Scroll>
      </div>
    );
  }
}
