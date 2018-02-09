import React, {Component} from 'react';
import './Header.css';
import Logo from './Shelfieimg.png';


class Header extends Component {
  render() {
    return(
    <div className = "header">
        <div className= "header-content">
        <img src={Logo} alt="logo" /> 
        <span> SHELFIE </span>
        </div>
    </div>
    )
  }
} 

export default Header;


