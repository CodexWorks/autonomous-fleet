import React from 'react';
import axios from 'axios';
import CurrentOrdersList from './micro-components/CurrentOrdersList';

export default class CurrentOrdersContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentOrders: [],
    };
  }

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

  render() {
    const filteredCurrentOrders = this.getCurrentOrders();
    return <CurrentOrdersList currentOrders={filteredCurrentOrders} />;
  }

  getCurrentOrders() {
    const { currentOrders } = this.state;
    return currentOrders.filter((order) => order.transport_order_id);
  }
}
