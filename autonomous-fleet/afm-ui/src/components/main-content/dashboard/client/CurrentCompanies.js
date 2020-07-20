import React from 'react';
import axios from 'axios';

// ############### Constructor ###############
export default class CurrentCompanies extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [2],
      currentCompanies: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://127.0.0.1:8000/api/company/user_companies/', {
        params: {
          id: this.state.user[0],
        },
      })
      .then((res) => {
        this.setState({
          currentCompanies: res.data,
        });
      })
      .catch((error) => {
        console.log('GET user companie error ' + error);
      });
  }

  // ############# RENDER ###########

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Company name</th>
              <th>VAT</th>
              <th>Address</th>
              <th>Country</th>
              <th>Registration number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.currentCompanies.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item['company_name']}</td>
                  <td>{item['vat_id']}</td>
                  <td>{item['adress']}</td>
                  <td>{item['country']}</td>
                  <td>{item['registration_number']}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
