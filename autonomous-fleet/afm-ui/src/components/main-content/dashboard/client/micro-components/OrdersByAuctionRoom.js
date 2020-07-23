import React from 'react';
import axios from 'axios';

// ############### Constructor ###############
export default class OrdersByAuctionRooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [2],
      orders: [],
    };
  }

  componentDidMount() {
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
      <table className='table'>
        <thead>
          <tr>
            <th colSpan='1'>Pick-up (from-until)</th>
            <th>Delivery (from-until)</th>
            <th>Volume</th>
            <th>Weight</th>
            <th>LDM</th>
            <th>Pallets</th>
            <th>Address</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.state.orders.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  {item['pickup_from']} - {item['pickup_until']}
                </td>
                <td>
                  {item['delivery_from']} - {item['delivery_until']}
                </td>
                <td>{item['volume']} &sup3;</td>
                <td>{item['weight']} kg</td>
                <td>{item['ldm']} ldm</td>
                <td>{item['pallets']}</td>
                <td>{item['delivery_address_id']}</td>
                <td>
                  {item['price']} {item['currency']}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
