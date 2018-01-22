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

    signUp() {
        const { email, password } = this.state
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            this.setState({
                error: error
            })
        })
        .then(() => {
            render((<Redirect to='/UserStats' />)) 
        })
    }

    render() {
        // const isLoggedIn = this.state.signedIn;
        // let test = null;
        // if (isLoggedIn) {
        //     let test = <Redirect to='/UserStats' />
        // }
        return(
            <div className='form-inline' id="banana" style={{ margin: "5%" }}>
                <h2>SignUp</h2>
                <div className='form-group'></div>
                <input 
                className='form-control'
                type='text'
                style={{ marginRight: '5px'}}
                placeholder='email'
                // value={this.state.email}
                onChange={this.changeEmailState}
                />
                <input 
                className='form-control'
                type='password'
                style={{ marginRight: '5px'}}
                placeholder='password'
                // value = {this.state.password}
                onChange={this.changePasswordState}
                />
                <button 
                className='btn btn-primary'
                type='button'
                onClick={() => this.signUp()}
                >
                SignUp
                </button>
                
                <div>{this.state.error.message}</div>
                {/* <div>{ test }</div> */}
                <div><Link to={'/SignIn'}>Already a user? Sign in instead.</Link></div>
            </div>
            
        )
    }
}

export default SignUp;