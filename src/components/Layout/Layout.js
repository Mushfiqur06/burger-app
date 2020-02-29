import React from 'react';
import Toolbar from './../Navigation/Toolbar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';
import Aux from './../../hoc/Aux';
import './Layout.css';

const layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className="content">{props.children}</main>
  </Aux>
);

export default layout;
