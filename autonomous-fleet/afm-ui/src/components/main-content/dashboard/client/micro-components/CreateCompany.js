import React from 'react';
import axios from 'axios';

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
    let payload = {
      company_id: this.state.companyId,
      vat_id: this.state.vatId,
      is_supplier: this.state.isSupplier,
      is_client: this.state.isCompany,
      adress: this.state.adress,
      country_id: this.state.countryId,
      country: this.state.country,
      registration_number: this.state.registrationNumber,
      user: this.state.username,
    };
    axios
      .post('http://127.0.0.1:8000/api/company/', payload)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log('POST new company err ' + error);
      });
  };

  // ############# RENDER ###########

  render() {
    const filteredCurrentOrders = this.getCurrentOrders();
    return (
      <div>
        <button data-cy='orders-btn' onClick={this.onClick}>
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
