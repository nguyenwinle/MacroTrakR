import React from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom';
  import axios from 'axios';
  import Landing from './Landing.jsx';

class UserStats extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activityLevel: "sedentary",
            goal: "Lose",
            gender: "Male",
            weight: 0,
            height: 0,
            age: 0,
            compiledData : null
        }
        this.handleActivityLevel = this.handleActivityLevel.bind(this)
        this.handleGender = this.handleGender.bind(this)
        this.handleSubmitUserStats = this.handleSubmitUserStats.bind(this)
        this.handleGoal = this.handleGoal.bind(this)
        this.handleAge = this.handleAge.bind(this)
        this.handleFeet = this.handleFeet.bind(this)
        this.handleInches = this.handleInches.bind(this)
        this.handleWeight = this.handleWeight.bind(this)
    }

    handleFeet(event) {
        var feetInCM = event.target.value * 30.48
        console.log(feetInCM)
        this.setState({
            height: this.state.height + feetInCM
        })
    }

    handleInches(event) {
        var inchesInCM = event.target.value * 2.54
        console.log(inchesInCM)
        this.setState({
            height: this.state.height + inchesInCM
        })
    }

   handleActivityLevel(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleGender(event) {
        this.setState({
            gender: event.target.value
        })
    }

    handleGoal(event) {
        this.setState({
            goal: event.target.value
        })
    }

    handleWeight(event) {
        this.setState({
            weight: event.target.value
        })
    }

    handleAge(event) {
        this.setState({
            age: event.target.value
        })
    }

    handleSubmitUserStats(event) {
        event.preventDefault()
        var userBodyData = {
            age: this.state.age,
            weight: this.state.weight,
            height: this.state.height,
            gender: this.state.gender,
            goal: this.state.goal,
            activityLevel: this.state.activityLevel
          }

        const { email } = this.props
        userBodyData["email"] = email;
        
        axios.post('banx/userStats', userBodyData)
          .then((response)=>{
            this.setState({
                compiledData: userBodyData
            })
          })
          .then(() => {
              console.log('bananapancakes', this.state.compiledData)
          })
          .catch((error)=> {
            console.log(error);
          });
    }

    render() {
        if (this.state.compiledData) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <Landing compiledData={this.state.compiledData}/>
                <form>
                    <label>
                    Age:<br/>
                    <input type="number" placeholder="Age" onChange={this.handleAge} />
                    </label>
                    <br/> <br/>
                    <label>                
                    Current Weight:<br/>
                    <input type="number" placeholder="Weight" onChange={this.handleWeight} />
                    </label>
                    <br/> <br/>
                    <label>
                    Current Height:<br/>
                    <input type="number" placeholder="Feet" onChange={this.handleFeet}/>
                    <input type="number" placeholder="Inches" onChange={this.handleInches} />
                    </label>
                    <br/> <br/>
                    <label>
                        Activity Level:<br/>
                    <select value={this.state.value} onChange={this.handleActivityLevel}>
                        <option value="sedentary">Sedentary</option>
                        <option value="lightActivity">Light Activity</option>
                        <option value="moderateActivity">Moderate Activity</option>
                        <option value="veryActive">Very Active</option>
                    </select>
                    </label>
                    <label>
                        Gender:<br/>
                    <select value={this.state.gender} onChange={this.handleGender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    </label>
                    <br/><br/>
                    <label>
                        Goal:<br/>
                    <select value={this.state.value} onChange={this.handleChangeGoal}>
                        <option value="Lose">Lose</option>
                        <option value="Lose10">Lose10</option>
                        <option value="Maintain">Maintain</option>
                        <option value="Gain">Gain</option>
                    </select>
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmitUserStats} /><br/> <br/>

                </form>
            </div>
        )
    }
}



var mapStateToProps = function(state) {
    const { email } = state
    return {
        email
    }
}

export default connect(mapStateToProps, null)(UserStats);