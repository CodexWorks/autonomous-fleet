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
import logo from '../../imgs/logo_afm.svg';
import SideNavbarMenuItem from './SideNavbarMenuItem';

export default class SideNavbarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: props.items,
    };
  }

  render() {
    const itemsFragment = this.state.menuItems.map((item, i) => (
      <SideNavbarMenuItem
        key={i}
        primaryText={item.text}
        route={item.route}
        icon={item.icon}
      />
    ));
    return (
      <nav id='sidebar'>
        <div className='sidebar-header'>
          <img className='afm-logo' src={logo} alt='afm logo' />
          <h3>Autonomous Fleet</h3>
        </div>
        <ul className='list-unstyled components'>{itemsFragment}</ul>
      </nav>
    );
  }
}
