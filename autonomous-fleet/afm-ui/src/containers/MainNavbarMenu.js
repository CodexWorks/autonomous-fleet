import React from 'react';
import { MdMenu, MdEnhancedEncryption } from 'react-icons/md';
import { withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { API } from '../utils/API';

import { withCookies } from 'react-cookie';

// ############### Constructor ###############
class MainNavbarMenu extends React.Component {
  constructor(props) {
    super(props);

    const { cookies } = props;

    this.state = {
      userName: this.props.username,
      companies: [],
      cookieValue: cookies.get('companyData'),
      selectedValue: cookies.get('companyIndex'),
    };
    console.log(this.props.userName);
    console.log(this.state.cookieValue);
  }

  // REFACTOR!!
  componentDidMount() {
    API.get('/company/user_companies/', {
      params: {
        username: this.state.userName,
      },
    })
      .then((res) => {
        const companyData = [];

        // Getting the name and id of the company and putting them in an array
        res.data.map((item, index) => {
          companyData.push({
            id: item['id'],
            name: item['company_name'],
            is_supplier: item['is_supplier'],
          });
        });
        // Adding the array to the state
        this.setState({
          companies: companyData,
        });

        if (
          !this.state.selectedValue ||
          this.state.selectedValue >= this.state.companies.length
        ) {
          //Obtaining the first company's ID if the cookie isn't valid
          this.setState({
            cookieValue: {
              id: companyData[0]['id'],
              is_supplier: companyData[0]['is_supplier'],
            },
            selectedValue: 0,
          });
        }
      })
      .catch((error) => {
        console.log('GET user companie error ' + error);
      });
  }

  handleCookieValueChange = (event) => {
    const { cookies } = this.props;
    const index = event.target.value;
    let cookieData = {
      id: this.state.companies[index].id,
      is_supplier: this.state.companies[index].is_supplier,
    };
    cookies.set('companyData', cookieData);
    cookies.set('companyIndex', index);
    this.setState({
      cookieValue: cookieData,
      selectedValue: index,
    });
  };

  // ############# RENDER ###########
  render() {
    // const { match, location, history } = this.props;
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          {/* toggle */}
          <button type='button' id='sidebarCollapse' className='btn btn-info'>
            <MdMenu />
          </button>

          {/* upper-right corner btns */}
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='nav navbar-nav ml-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='#' data-cy='username'>
                  <i className='fas fa-user-tie' />
                  HI, {this.state.userName}!
                </a>
              </li>
              {/* <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                  href='#'
                >
                  Role
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <NavLink className='dropdown-item' to='/client'>
                    Client
                  </NavLink>
                  <a className='dropdown-item' href=''>
                    Supplier
                  </a>
                </div>
              </li> */}
              <li>
                <select
                  onChange={this.handleCookieValueChange}
                  className='form-control'
                  disabled={this.state.companies.length === 0}
                  value={this.state.selectedValue}
                >
                  {this.state.companies.length === 0 ? (
                    <option style={{ display: 'none' }}>
                      No company found
                    </option>
                  ) : (
                    this.state.companies.map((item, index) => {
                      return (
                        <option key={index} value={index}>
                          {item['name']}
                        </option>
                      );
                    })
                  )}
                </select>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  LOGOUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withCookies(MainNavbarMenu);
