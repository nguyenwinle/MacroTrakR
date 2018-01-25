import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import { firebaseApp } from '../config/firebase.js'
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
//the header creates links that can be used to navigate between routes


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  signOut() {
    firebaseApp.auth().signOut()
    .then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    })
  }

  handleClick(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

render() {
  return (
  <header>

  <AppBar
    title = "MacroTrakR"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
  <RaisedButton onClick={this.handleClick}label="Menu"/>
  <Popover
  open={this.state.open}
  anchorEl={this.state.anchorEl}
  // anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
  // targetOrigin={{horizontal: 'left', vertical: 'top'}}
  onRequestClose={this.handleRequestClose}
  >
  <Menu>
    <MenuItem>
      <Link to='/SignUp'>SignUp</Link>
    </MenuItem>
    <MenuItem  >
      <Link to='/SignIn'>SignIn</Link>
    </MenuItem>
    <MenuItem >
      <Link to='/'>Landing</Link>
    </MenuItem>
    <MenuItem >
      <Link to='/UserStats'>Profile</Link>
    </MenuItem>
    <MenuItem onClick={() => this.signOut()}>
    SignOut
    </MenuItem>
  </Menu>
  </Popover>
  </AppBar>

  </header>
  )}
}


export default Header;
