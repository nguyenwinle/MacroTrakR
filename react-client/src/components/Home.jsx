import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { firebaseApp } from '../config/firebase.js';

class Home extends React.Component {

  
  
  render() {
    return (
    <div>
      <h1>MacroTrakR</h1>
    </div>
    )
  }
}

export default Home;