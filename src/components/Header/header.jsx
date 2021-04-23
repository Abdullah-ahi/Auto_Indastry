import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './header.css'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export class Header extends Component {
  render(){
    const { Login } = this.props
    return (
      <header>
        <AppBar position="static" className="MY CLASS">
          <Toolbar className="nav">
            <div className="nav-elems">
              <Link to='/' className="nav-link">
                <ViewHeadlineIcon className="nav-link-btn" variant="outlined" fontSize="large"></ViewHeadlineIcon>
              </Link>
              <Link to='/news' className="nav-link">
                <Button className="nav-link-btn news-btn" variant="outlined">News</Button>
              </Link>
            </div>
            {Login.login ? 
            <Link to='/profile' className="log-in-link">
              <Button className="log-in-link-btn" variant="outlined" color="inherit">Profile</Button>
            </Link> :
            <Link to='/login' className="log-in-link">
              <ExitToAppIcon className="log-in-link-btn" variant="outlined" color="inherit" fontSize="large"></ExitToAppIcon>
            </Link>
            }
          </Toolbar>
        </AppBar>
      </header>
    )
  }
}