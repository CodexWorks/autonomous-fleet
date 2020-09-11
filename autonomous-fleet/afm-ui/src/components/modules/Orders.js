import React from 'react';
import { API } from '../../utils/API';
import CurrentOrdersList from './orders/CurrentOrdersList';

// ############### Constructor ###############
export default class CurrentOrdersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrders: [],
      isShowing: false,
      user: this.props.nameTheUser,
    };
  }

  onClick = () => {
    const userId = this.state.user;

    // e.g. query http://127.0.0.1:8000/api/transport-order/user_orders/?id=2
    API.get('/transport-order/user_orders/',{params:{userId:userId}})
      .then((res) => {
        this.setState({
          currentOrders: res.data,
        });
        console.log(this.state.currentOrders);
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
