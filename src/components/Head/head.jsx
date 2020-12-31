import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './head.css'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
export class Head extends Component {

  render(){
    const { Login } = this.props
    return(
      <div>
        <AppBar position="static" className="MY CLASS">
          <Toolbar className="nav">
            <div className="nav-elems">
              <Link to='/' className="nav-link">
                <Button className="nav-link-btn" variant="outlined">Head</Button>
              </Link>
              <Link to='/news' className="nav-link">
                <Button className="nav-link-btn" variant="outlined">News</Button>
              </Link>
            </div>
            {Login.login ? 
            <Link to='/profile' className="log-in-link">
              <Button className="log-in-link-btn" variant="outlined" color="inherit">Profile</Button>
            </Link> :
            <Link to='/login' className="log-in-link">
              <Button className="log-in-link-btn" variant="outlined" color="inherit">LOG IN</Button>
            </Link>
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}