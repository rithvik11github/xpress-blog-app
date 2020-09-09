import React from 'react';
import './style.css';
import ogo from './Capture.jpg';
/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logo">
    	<img src={ogo} alt="xpress"/>
        <a href="#">Xpress- A Blogging Application</a>
    </div>
   )

 }

export default Logo