import React from 'react';
import {
  MdDashboard,
  MdGavel,
  MdContentPaste,
  MdAccountBalance,
  MdAddShoppingCart,
  MdPortrait,
  MdMyLocation,
} from 'react-icons/md';
import logo from '../imgs/logo_afm.svg';

class SideNavbarMenu extends React.Component {
  render() {
    return (
      <nav id='sidebar'>
        <div className='sidebar-header'>
          <img className='afm-logo' src={logo} alt='afm logo' />
          <h3>Autonomous Fleet</h3>
        </div>
        <ul className='list-unstyled components'>
          <li className='active'>
            <a href='/'>
              <MdDashboard className='i' />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <MdGavel className='i' />
              <span>Auction House</span>
            </a>
            <a href='#'>
              <MdContentPaste className='i' />
              <span>Warehouse Management</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <MdAccountBalance className='i' />
              <span>Accounting</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <MdAddShoppingCart className='i' />
              <span>Vendor Management</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <MdPortrait className='i' />
              <span>Client Management</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <MdMyLocation className='i' />
              <span>Active Tracking</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideNavbarMenu;
