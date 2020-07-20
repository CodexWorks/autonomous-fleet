import React from 'react';
import axios from 'axios';

// ############### Constructor ###############
export default class CurrentCompanies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [2],
      auctionRooms: [],
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
            auctionRooms: res.data
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
               {this.state.auctionRooms.map((item, index) => {
                   return (
                   <tr key={index}>
                       <td>{item['name']}</td>
                       <td>{item['company']}</td>
                       <td>{item['description']}</td>
                       <td>{item['creation_date']}</td>
                   </tr>)
               })}
          </tbody>
        </table>
      </div>
    );
  }
}
