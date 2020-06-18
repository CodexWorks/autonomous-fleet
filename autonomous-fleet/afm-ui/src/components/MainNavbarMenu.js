import React, { Fragment } from 'react';
import { MdMenu } from 'react-icons/md';

class MainNavbarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
    };

    // leaga contextul din MainNavbarMenu la referinta metodei test() din app.js
    // this.onTestClick = props.onTestClick.bind(this);
  }

  render() {
    let mainNavbarMenu;
    // console.log(this.state.user);
    if (this.state.user) {
      mainNavbarMenu = (
        <Fragment>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              <i className='fas fa-user-tie' />
              HI, {this.state.user.name}!
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              @ CODEX EXPRESS
            </a>
            <ul className='collapse list-unstyled'>
              <li>
                <a href='#'>CODEX EXPRESS RO</a>
              </li>
              <li>
                <a href='#'>CODEX EXPRESS DE</a>
              </li>
              <li>
                <a href='#'>CODEX EXPRESS UK</a>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              LOGOUT
            </a>
          </li>
        </Fragment>
      );
    } else {
      mainNavbarMenu = (
        <Fragment>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              LOGIN
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              REGISTER
            </a>
          </li>
        </Fragment>
      );
    }

    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          {/* toggle */}
          <button type='button' id='sidebarCollapse' className='btn btn-info'>
            <MdMenu />
          </button>

          {/* butoane dreapta-sus */}
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='nav navbar-nav ml-auto'>
              {/* <li>
                <button onClick={this.onTestClick}>TEST</button>
              </li> */}
              {mainNavbarMenu}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MainNavbarMenu;
