import React, { Fragment } from 'react';
import { API } from '../../../utils/API';

import OrdersByAuctionRooms from './OrdersByAuctionRoom';

// ############### Constructor ###############
export default class CurrentAuctionRooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auctionRooms: this.props.auctionRooms,
    };
  }

  componentDidMount() {
    API.get('/transport-order')
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
      <Fragment>
        {this.props.auctionRooms.map((item, index) => {
          return (
            <Fragment>
              <tr
                className='flex-table rowgroup-highlight'
                role='rowgroup'
                key={index}
              >
                <td className='flex-row' role='cell'>
                  {item['name']}
                </td>
                <td className='flex-row' role='cell'>
                  {item['company']}
                </td>
                <td className='flex-row' role='cell'>
                  {item['description']}
                </td>
                <td className='flex-row' role='cell'>
                  {item['creation_date']}
                </td>
              </tr>
              <tr className='flex-table indented-row' role='rowgroup'>
                <td className='flex-row bolded-cell' role='columnheader'>
                  Pick-up (from-until)
                </td>
                <td className='flex-row bolded-cell' role='columnheader'>
                  Delivery (from-until)
                </td>
                <td className='flex-row bolded-cell' role='columnheader'>
                  Volume
                </td>
                <td className='flex-row bolded-cell' role='columnheader'>
                  Weight
                </td>
                <td className='flex-row bolded-cell' role='columnheader'>
                  LDM
                </td>
                <td className='flex-row bolded-cell' role='columnheader'>
                  Pallets
                </td>
                <td className='flex-row bolded-cell' role='columnheader'>
                  Address
                </td>
                <td className='flex-row bolded-cell' role='columnheader'>
                  Price
                </td>
                <td className='flex-row bolded-cell' role='columnheader'>
                  Status
                </td>
                <td className='flex-row bolded-cell' role='columnheader'>
                  Accept
                </td>
              </tr>
              <OrdersByAuctionRooms orders={this.state.orders} />
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}
