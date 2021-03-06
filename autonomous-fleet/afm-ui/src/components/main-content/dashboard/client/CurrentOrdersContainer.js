import React from 'react';
import axios from 'axios';
import CurrentOrdersList from './micro-components/CurrentOrdersList';

// ############### Constructor ###############
export default class CurrentOrdersContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentOrders: [],
    };
  }

  // ############### Lifecycle ###############

  componentDidMount() {
    axios
      .get('http://127.0.0.1:8000/api')
      .then((res) => {
        this.setState({
          currentOrders: res.data,
        });
        console.log(res.data);
      })
      .catch((error) => {
        console.log('get currentOrders err ' + error);
      });
  }

  // ############# RENDER ###########

  render() {
    const filteredCurrentOrders = this.getCurrentOrders();
    return <CurrentOrdersList currentOrders={filteredCurrentOrders} />;
  }

  // ############### Event Handlers ###############

  getCurrentOrders() {
    const { currentOrders } = this.state;
    return currentOrders.filter((order) => order.transport_order_id);
  }
}
