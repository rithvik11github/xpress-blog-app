import React from 'react';
import './style.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
 
export default () => {
  return (
  	<header className="header">
        <nav className="headerMenu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </nav>
        <div>
            Social Media Links
        </div>
    </header>
    //<AppBar position="static">
     // <Toolbar>
        //<Typography variant="headline" color="colorSecondary" noWrap>
         // Simple Blog Example
       // </Typography>
     // </Toolbar>
   // </AppBar>
  );
};