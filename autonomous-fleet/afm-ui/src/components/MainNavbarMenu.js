import React from 'react';
import { MdMenu, MdEnhancedEncryption } from 'react-icons/md';
import { withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import {withCookies, Cookies} from 'react-cookie'


// ############### Constructor ###############
class MainNavbarMenu extends React.Component {
  constructor(props) {
    super(props);

    const {cookies} = props;

    this.state = {
      user: [1],
      companies: [],
      selectedCompanyID: 0,
      cookieValue: cookies.get('companyID'),
    };
  }

  componentDidMount(){
    axios
      .get('http://127.0.0.1:8000/user_companies/', {
        params: {
          id: this.state.user[0],
        },
      })
      .then((res) => {
        const tempArray=[];
        // Getting the name and id of the company and putting them in an array
        res.data.map((item, index) =>
          tempArray.push({[item.company_name]: item.id})
        );

        // Adding the array to the state
        this.setState({
          companies: tempArray
        });
        
        if(!this.state.cookieValue){
          //Obtaining the first company's ID if the cookie isn't valid
          let firstID=Object.keys(tempArray[0]).map(key => tempArray[0][key])[0];
          this.setState({
            selectedCompanyID: firstID
          });
        }else{
          // Show the value corresponding to the id from the cookie
        }
      })
      .catch((error) => {
        console.log('GET user companie error ' + error);
      });
  }

  handleChange = (event) =>{
    let selectedItem = this.state.companies[event.target.selectedIndex];
    this.setState({
      selectedCompanyID: selectedItem[event.target.value]
    })
    
    // saving selected company id in cookie
    const {cookies} = this.props;
    cookies.set('companyID', this.state.selectedCompanyID);
    this.setState({ cookieValue: this.state.selectedCompanyID });
  }

  // ############# RENDER ###########
  render() {
    const { match, location, history } = this.props;
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
                <select onChange={this.handleChange} className="form-control" disabled={this.state.companies.length === 0}
                >
                  {(this.state.companies.length === 0) ? 
                    (<option style={{display: 'none'}}>No company found</option>)
                    :
                     (
                      // Going through the array's values
                      this.state.companies.map((item, index) => {
                        return (
                          // For each value an <option> tag is created with the item's name
                          Object.keys(item).map((key, i) => {
                            return <option selected={this.state.cookieValue === item[key]}>{key}</option>
                          })
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
