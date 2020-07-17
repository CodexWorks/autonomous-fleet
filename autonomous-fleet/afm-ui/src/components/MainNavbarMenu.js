import React from 'react';
import { MdMenu } from 'react-icons/md';
import { withRouter, BrowserRouter as Router, Route } from 'react-router-dom';

// ############### Constructor ###############
class MainNavbarMenu extends React.Component {
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
              <li className='nav-item dropdown'>
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

export default withRouter(MainNavbarMenu);
