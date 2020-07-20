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
      .get('http://127.0.0.1:8000/user-companies/', {
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
              <th>Adress</th>
              <th>Country</th>
              <th>Registration number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.currentCompanies.map((item, index) => {
              return (
                <tr key={index}>
                  {Object.keys(item).map((key, i) => {
                    // displays current company, VAT, address, country, reg no from DB
                    if (
                      key !== 'id' &&
                      key !== 'company_id' &&
                      key !== 'is_supplier' &&
                      key !== 'is_client' &&
                      key !== 'user' &&
                      key !== 'country_id'
                    ) {
                      return <td key={i}>{item[key]}</td>;
                    }
                    return null;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
