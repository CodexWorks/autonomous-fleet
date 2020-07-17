import React from 'react';
import axios from 'axios';

// ############### Constructor ###############
export default class CreateCompany extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowing: false,

      company_id: '1',
      company_name: '',
      vat_id: '',
      is_supplier: false,
      is_client: false,
      adress: '',
      country_id: '1',
      country: '',
      registration_number: '',
      user: [],
    };
  }

  toggleShow = () => {
    this.userpost();
    this.setState({
      isShowing: !this.state.isShowing,
    });
  };

  handleChange = (event) => {
    switch (event.target.name) {
      case 'name':
        this.setState({ company_name: event.target.value });
        break;
      case 'vat':
        this.setState({ vat_id: event.target.value });
        break;
      case 'supplier':
        this.setState({ is_supplier: event.target.value });
        break;
      case 'client':
        this.setState({ is_client: event.target.value });
        break;
      case 'adress':
        this.setState({ adress: event.target.value });
        break;
      case 'country':
        this.setState({ country: event.target.value });
        break;
      case 'reg-number':
        this.setState({ registration_number: event.target.value });
        break;
      default:
        break;
    }
  };

  onClick = () => {
    this.userpost();
    let payload = {
      company_id: this.state.company_id,
      company_name: this.state.company_name,
      vat_id: this.state.vat_id,
      is_supplier: this.state.is_supplier,
      is_client: this.state.is_client,
      adress: this.state.adress,
      country_id: this.state.country_id,
      country: this.state.country,
      registration_number: this.state.registration_number,
      user: this.state.user,
    };
    axios
      .post('http://127.0.0.1:8000/api/company/', payload)
      .then((res) => {})
      .catch((error) => {
        console.log('POST new company err ' + error);
      });
  };

  // Getting user id by using the token
  userpost() {
    let data = { key: '3be53b404e6763bc0b8b64d2807a0797f6adfa19' };
    axios.post('http://127.0.0.1:8000/user/', data).then((res) => {
      this.setState({
        user: [res.data.id],
      });
    });
  }

  // ############# RENDER ###########

  render() {
    return (
      <div>
        <button
          type='button'
          className='btn btn-primary'
          onClick={this.toggleShow}
        >
          Add company
        </button>
        {this.state.isShowing ? (
          <form>
            <div className='form-group'>
              <label>Company name:</label>
              <input
                value={this.state.company_name}
                type='text'
                name='name'
                className='form-control'
                onChange={this.handleChange}
                placeholder='Enter company name'
              />
            </div>

            <div className='form-group'>
              <label>VAT:</label>
              <input
                value={this.state.vat_id}
                type='text'
                name='vat'
                className='form-control'
                onChange={this.handleChange}
                placeholder='Enter VAT'
              />
            </div>

            <div className='form-group'>
              <input
                type='checkbox'
                value={this.state.is_supplier}
                id='supplier'
                name='supplier'
                onChange={this.handleChange}
              />
              <label for='supplier'>Supplier</label>
            </div>

            <div className='form-group'>
              <input
                type='checkbox'
                value={this.state.is_client}
                id='client'
                name='client'
                onChange={this.handleChange}
              />
              <label for='client'>Client</label>
            </div>

            <div className='form-group'>
              <label>Adress:</label>
              <input
                value={this.state.adress}
                type='text'
                name='adress'
                onChange={this.handleChange}
                className='form-control'
                placeholder='Enter adress'
              />
            </div>

            <div className='form-group'>
              <label>Country:</label>
              <input
                value={this.state.country}
                type='text'
                name='country'
                onChange={this.handleChange}
                className='form-control'
                placeholder='Enter country'
              />
            </div>

            <div className='form-group'>
              <label>Registration number:</label>
              <input
                value={this.state.registration_number}
                type='text'
                name='reg-number'
                onChange={this.handleChange}
                className='form-control'
                placeholder='Enter company registration number'
              />
            </div>

            <button data-cy='orders-btn' onClick={this.onClick}>
              Add
            </button>
          </form>
        ) : (
          <p></p>
        )}
      </div>
    );
  }

  // ############### Event Handlers ###############

  getCurrentOrders() {
    const { currentOrders } = this.state;
    return currentOrders.filter((order) => order.transport_order_id);
  }
}
