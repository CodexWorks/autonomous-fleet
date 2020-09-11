import React from 'react';
import { API } from '../../utils/API';

// ############### Constructor ###############
export default class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.nameTheUser,
      currentCompanies: [],
    };
  }

  // REFACTOR!!
  componentDidMount() {
    API.get('/company/user_companies/', {
      params: {
        username: this.state.user,
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
