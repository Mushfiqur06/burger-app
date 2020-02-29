import React from 'react';
import Toolbar from './../Navigation/Toolbar/Toolbar';
import Aux from './../../hoc/Aux';
import './Layout.css';

const layout = props => (
  <Aux>
    <Toolbar />
    <main className="content">{props.children}</main>
  </Aux>
);

export default layout;
