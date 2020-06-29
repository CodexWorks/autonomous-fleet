import React from 'react';

const SideNavbarMenuItem = ({ primaryText, route, icon, active }) => {
  return (
    <li className={`${active ? 'active' : ''}`}>
      <a href={route}>
        <i className={icon} />
        <span>{primaryText}</span>
      </a>
    </li>
  );
};

export default SideNavbarMenuItem;
