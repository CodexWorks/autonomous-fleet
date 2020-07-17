import React from 'react';
import axios from 'axios';
import CurrentOrdersList from './micro-components/CurrentOrdersList';

// ############### Constructor ###############
export default class CurrentOrdersContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentOrders: [],
      isShowing: false,
    };
  }

  onClick = () => {
    axios
      .get('http://127.0.0.1:8000/api/transportorders')
      .then((res) => {
        this.setState({
          currentOrders: res.data,
        });
        console.log(res.data);
      })
      .catch((error) => {
        console.log('get currentOrders err ' + error);
      });
    this.setState({
      isShowing: !this.state.isShowing,
    });
  };

  // ############# RENDER ###########

  render() {
    const filteredCurrentOrders = this.getCurrentOrders();
    return (
      <div>
        <button
          type='button'
          className='btn btn-dark'
          data-cy='orders-btn'
          onClick={this.onClick}
        >
          Show Orders
        </button>
        {this.state.isShowing ? (
          <CurrentOrdersList currentOrders={filteredCurrentOrders} />
        ) : null}
      </div>
    );
  }

  // ############### Event Handlers ###############

  getCurrentOrders() {
    const { currentOrders } = this.state;
    return currentOrders.filter((order) => order.transport_order_id);
  }
}
