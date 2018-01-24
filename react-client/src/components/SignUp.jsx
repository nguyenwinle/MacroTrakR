import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { firebaseApp } from '../config/firebase.js';

class SignUp extends React.Component {
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
        // this.handleSignUp = this.handleSignUp.bind(this);
        this.changeEmailState = this.changeEmailState.bind(this);
        this.changePasswordState = this.changePasswordState.bind(this)
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

    // handleSignUp() {
    //     axios.post('/dbSignUpInfo', {
    //         email: this.state.email,
    //         password: this.state.password
    //         })
    //         .then(function (response) {
    //         console.log(response);
    //         })
    //         .catch(function (error) {
    //         console.log(error);
    //         });
    // }

    signUp() {
        const { email, password } = this.state
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            this.setState({
                error: error
            })
        })
        .then(() => {
            this.setState({
                signedIn: true
            })
        })
    }

    render() {
        const isLoggedIn = this.state.signedIn;
        if (isLoggedIn) {
            return <Redirect to='/UserStats' />
        }
        return(
        <div className = 'container'>
          <MuiThemeProvider>
            <div>
              <h1> Sign Up</h1>
             <TextField
               hintText="Enter your First Name"
               floatingLabelText="First Name"
               onChange = {(event,newValue) => this.setState({first_name:newValue})}
               />
             <br/>
             <TextField
               hintText="Enter your Last Name"
               floatingLabelText="Last Name"
               onChange = {(event,newValue) => this.setState({last_name:newValue})}
               />
             <br/>
             <TextField
               hintText="Enter your Email"
               type="email"
               floatingLabelText="Email"
               // value={this.state.email}
               onChange={this.changeEmailState}
               />
             <br/>
             <TextField
               type = "password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               // value = {this.state.password}
               onChange={this.changePasswordState}
               />
             <br/>

           <RaisedButton label="Submit" primary={true} style={style}  onClick={() => this.signUp()}/>
           <div>{this.state.error.message}</div>
           <div><Link to={'/SignIn'}>Already a user? Sign in instead.</Link></div>
            </div>
           </MuiThemeProvider>
        </div>

        )
    }
}

const style = {
  margin: 15,
};

export default SignUp;
