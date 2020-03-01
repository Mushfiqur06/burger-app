import React from 'react';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import './Toolbar.css';

const toolbar = () => (
  <header className="toolbar">
    <div>Menu</div>
    <div className="logo">
      <Logo />
    </div>

    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
