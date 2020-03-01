import React from 'react';
import burgerLogo from './../../assets/images/burger-logo.png';
import './Logo.css';

const logo = props => (
  <div className="logo">
    <img src={burgerLogo} alt="Burger Logo" />
  </div>
);

export default logo;
