// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import { connect } from 'react-redux'
import { firebaseApp } from '../config/firebase.js';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom'


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            },
            signedIn: false
        }

        this.changeEmailState = this.changeEmailState.bind(this)
        this.changePasswordState = this.changePasswordState.bind(this)
        this.signIn = this.signIn.bind(this)
    }


    changeEmailState(event) {
        this.setState({
            email: event.target.value
        })
    }

    changePasswordState(event) {
        this.setState({
            password: event.target.value
        })
    }

    signIn() {
        const { email, password } = this.state
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            this.setState({
                error: error
            })
          })
          .then(() => {
              console.log(this.state)
              this.setState({
                  signedIn: true
              })
          })
    }

    render() {
        const { email } = this.props
        if (email) {
            return (
              <Redirect to={'/'}/>
            )
          }
        return(
          <div className = 'loginForm'>
            {/* <MuiThemeProvider> */}
              <div>
              <h1>Login</h1>
               <TextField
                 hintText="Enter your email"
                 floatingLabelText="Email"
                 onChange={this.changeEmailState}
                 />
               <br/>
                 <TextField
                   type="password"
                   hintText="Enter your Password"
                   floatingLabelText="Password"
                   onChange={this.changePasswordState}
                   />
                 <br/>

                 <RaisedButton label="Submit" primary={true} style={style} onClick={() => this.signIn()}/>
                 <div>{this.state.error.message}</div>
                 <div><Link to={'/'}>Not registered? Sign up!</Link></div>
             </div>
             {/* </MuiThemeProvider> */}
          </div>
        )
    }
}
const style = {
margin: 15,
};

const mapStateToProps = (state) => {
    const { email } = state
    return {
        email
    }
}

export default connect(mapStateToProps, null)(SignIn);
