import React from 'react';
import { API } from '../../utils/API';

import CurrentAuctionRooms from './auction-house/CurrentAuctionRooms';
import Scroll from '../utils/Scroll';

// ############### Constructor ###############
export default class CurrentCompanies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [2, 3],
      auctionRooms: [],
      orders: [],
    };
  }

  // REFACTOR!!
  componentDidMount() {
    const userId = this.state.user[1];

    API.get(`/auction-room/get_auction_rooms?id=${userId}`)
      .then((res) => {
        this.setState({
          auctionRooms: res.data,
        });
      })
      .catch((error) => {
        console.log('GET user auction room error: ' + error);
      });
  }

  // ############# RENDER ###########

  render() {
    return (
      <div>
        <h3>Auction Rooms</h3>
        <Scroll>
          <table
            className='table-container'
            width='100%'
            role='table'
            aria-label='Auction Rooms'
          >
            <thead>
              <tr className='flex-table rowgroup-highlight' role='rowgroup'>
                <th className='flex-row' role='columnheader'>
                  Name
                </th>
                <th className='flex-row' role='columnheader'>
                  Company
                </th>
                <th className='flex-row' role='columnheader'>
                  Description
                </th>
                <th className='flex-row' role='columnheader'>
                  Creation
                </th>
              </tr>
            </thead>
            <tbody>
              <CurrentAuctionRooms auctionRooms={this.state.auctionRooms} />
            </tbody>
          </table>
          {/* move table in CurrentAuctionRoomsTable */}
          <span className='brlarge' />
        </Scroll>
      </div>
    );
  }
}
