import React from 'react';
import logo from '../imgs/logo.svg';
import SideNavbarMenuItem from '../components/side-navbar-menu/SideNavbarMenuItem';

// ############### Constructor ###############
export default class SideNavbarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: props.items,
    };
  }

  // ############# RENDER ###########
  render() {
    const itemsFragment = this.state.menuItems.map((item, i) => (
      <SideNavbarMenuItem
        key={i}
        primaryText={item.text}
        route={item.route}
        icon={item.icon}
        active={item.active}
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
