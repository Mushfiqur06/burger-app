import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = props => {
  return (
    <div className="sideDrawer">
      <Logo />

      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
