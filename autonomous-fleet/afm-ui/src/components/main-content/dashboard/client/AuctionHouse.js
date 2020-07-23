import React, { Fragment } from 'react';
import axios from 'axios';

import CurrentAuctionRooms from './micro-components/CurrentAuctionRooms';

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
        console.log(this.state.auctionRooms);
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
        console.log(res.data);
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
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Description</th>
              <th>Creation date</th>
            </tr>
          </thead>
          <tbody>
            <CurrentAuctionRooms auctionRooms={this.state.auctionRooms} />
          </tbody>
        </table>
      </div>
    );
  }
}
