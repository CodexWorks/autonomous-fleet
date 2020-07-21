import React from 'react';
import { MdMenu, MdEnhancedEncryption } from 'react-icons/md';
import { withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import {withCookies} from 'react-cookie'


// ############### Constructor ###############
class MainNavbarMenu extends React.Component {
  constructor(props) {
    super(props);

    const {cookies} = props;

    this.state = {
      user: [2],
      companies: [],
      cookieValue: cookies.get('companyID'),
    };
  }

  componentDidMount(){
    axios
      .get('http://127.0.0.1:8000/api/company/user_companies/', {
        params: {
          id: this.state.user[0],
        },
      })
      .then((res) => {
        const companyNameAndId=[];
        // Getting the name and id of the company and putting them in an array
        res.data.map((item, index) =>
          companyNameAndId.push({[item.id]: item.company_name})
        );
        // Adding the array to the state
        this.setState({
          companies: companyNameAndId
        });
        
        if(!this.state.cookieValue){
          //Obtaining the first company's ID if the cookie isn't valid
          let firstID=Object.keys(companyNameAndId[0]);
          this.setState({
            cookieValue: firstID[0]
          });
        }
      })
      .catch((error) => {
        console.log('GET user companie error ' + error);
      });
  }

  handleCookieValueChange = (event) =>{
    const {cookies} = this.props;
    cookies.set('companyID', event.target.value);
    this.setState({ cookieValue: event.target.value });
  }

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
                <a className='nav-link' href='#'>
                  <i className='fas fa-user-tie' />
                  HI, USER!
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
                  className="form-control" 
                  disabled={this.state.companies.length === 0}
                  value={this.state.cookieValue}
                >
                  {
                  (this.state.companies.length === 0) 
                  ? (<option style={{display: 'none'}}>No company found</option>)
                  : (
                    this.state.companies.map((item, index) => {
                      let companyID = Object.keys(item);
                      return(
                      <option key={index} value={companyID}>{item[companyID]}</option>
                      );
                    })
                  )
                  }
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
