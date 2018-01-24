import React from 'react';
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
        const isLoggedin = this.state.signedIn;
        if (isLoggedin) {
            return (
              <Redirect to={'/'}/>
            )
          }
        return(
            <div className='form-inline' id="banana" style={{ margin: "5%" }}>
            <h2>SignIn</h2>
                <div className='form-group'></div>
                <input 
                className='form-control'
                type='text'
                style={{ marginRight: '5px'}}
                placeholder='email'
                onChange={this.changeEmailState}
                />
                <input 
                className='form-control'
                type='password'
                style={{ marginRight: '5px'}}
                placeholder='password'
                onChange={this.changePasswordState}
                />
                <button 
                className='btn btn-primary'
                type='button'
                onClick={() => this.signIn()}
                >
                SignIn
                </button>
                <div>{this.state.error.message}</div>
                <div><Link to={'/'}>Sign me up!</Link></div>
            </div>
        )
    }
}

export default SignIn;