import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import { firebaseApp } from '../config/firebase.js'

//the header creates links that can be used to navigate between routes


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  signOut() {
    firebaseApp.auth().signOut()
    .then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    })
  }

  render() {
    return (
      <header>
    <nav>
    <AppBar 
    iconClassNameRight="muidocs-icon-navigation-expand-more">
      <ul>
        {/* //routes to is arbitrary but must match patch in main */}
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/SignUp'>SignUp</Link></li>
        <li><Link to='/SignIn'>SignIn</Link></li>
        <li><Link to='/'>Landing</Link></li>
        <li><Link to='/UserStats'>Profile</Link></li>
        <li><Link to='/USDAsearch'>USDAsearch</Link></li>
        <button 
      className='btn btn-danger'
      onClick={() => this.signOut() }
      ></button>
      </ul>
      <hr/>
      </AppBar>
    </nav>
  </header>
    )
  }
  

}
  

export default Header;