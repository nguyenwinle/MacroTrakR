import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import { firebaseApp } from '../config/firebase.js'
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';


//the header creates links that can be used to navigate between routes


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }


    this.handleToggle = this.handleToggle.bind(this)
    this.handleClick = this.handleClick.bind(this)
    // this.handleRequestClose = this.handleRequestClose.bind(this)
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

  handleToggle() {
    this.setState({open: !this.state.open});
  }

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
    onLeftIconButtonTouchTap={this.onClick}
    onClick = {this.handleToggle}
  >
  <Drawer
    docked={false}
    width={200}
    open={this.state.open}
    onRequestChange={(open) => this.setState({open})}
  >
    <MenuItem onClick={this.handleRequestClose}><Link to='/'>Home</Link></MenuItem>
    <MenuItem onClick={this.handleRequestClose}><Link to='/SignUp'>Sign Up</Link></MenuItem>
    <MenuItem onClick={this.handleRequestClose}>  <Link to='/SignIn'>Login</Link></MenuItem>
    <MenuItem onClick={this.handleRequestClose}><Link to='/UserStats'>Profile</Link></MenuItem>
    <MenuItem onClick={() => this.signOut()}>SignOut</MenuItem>
  </Drawer>

  </AppBar>

  </header>
  )}
}


export default Header;