import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseApp } from '../config/firebase.js';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: '',
            error: {
                message: ''
            },
        }
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

    signUp() {
        const { email, password } = this.state
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            this.setState({
                error: error
            })
        })
    }



    render() {
        const { email } = this.props;
        let redirect;
        if (email) {
            redirect = <Redirect to='/UserStats'/>
        }
        return(
        <div className = 'signupForm'>
         {redirect}
          {/* <MuiThemeProvider> */}
            <div>
              <h2>Create New Account</h2>
             <TextField
               hintText="Enter your First Name"
               floatingLabelText="First Name"
            //    onChange = {(event,newValue) => this.setState({first_name:newValue})}
               />
             <br/>
             <TextField
               hintText="Enter your Last Name"
               floatingLabelText="Last Name"
            //    onChange = {(event,newValue) => this.setState({last_name:newValue})}
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

           {/* <RaisedButton label="Submit" primary={true} style={style}  onClick={() => this.signUp()}/> */}
           <RaisedButton label="Submit" primary={true} onClick={() => this.signUp()}/>
           <div>{this.state.error.message}</div>
           <div><Link to={'/SignIn'}>Already a user? Sign in instead.</Link></div>
            </div>
           {/* </MuiThemeProvider> */}
        </div>

        )
    }
}

const mapStateToProps = (state) => {
    const { email } = state;
    return {
        email
    }
}

export default connect(mapStateToProps, null)(SignUp);
