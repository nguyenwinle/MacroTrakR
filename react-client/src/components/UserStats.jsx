import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import DatePicker from 'material-ui/DatePicker';
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
import SetCalories from './SetCalories.jsx';
import Paper from 'material-ui/Paper';
import DailySummary from './DailySummary.jsx';

const styles = {
  customWidth: {
    width: 200,
  },
};

class UserStats extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: null,
            value2: null,
            value3: null,
            goal: "Lose",
            gender: "Male",
            weight: 0,
            height: 0,
            age: 0,
            calories: ""
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

   handleActivityLevel(event, index, value) {
        this.setState({
            value
        })
    }

    handleGender(event, index, value2) {
        this.setState({
            value2
        })
    }

    handleGoal(event, index, value3) {
        this.setState({
            value3
        })
    }

    handleWeight(event) {
        var weightInKG = event.target.value * 0.453592
        this.setState({
            weight: weightInKG
        })
    }

    handleAge(event) {
        this.setState({
            age: event.target.value
        })
    }

    calculateMacros(obj){
        let restingEnergy = null;
        let TDEE = null;
        let totalTDEE = null;

        
        if (obj.gender === "Male") {
            restingEnergy = 10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age + 5
        } else if (obj.gender === "Female") {
            restingEnergy = 10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age - 161
        }

        if (obj.activityLevel === "sedentary" ) {
            TDEE = restingEnergy * 1.2;
        } else if (obj.activityLevel === "lightActivity") {
            TDEE = restingEnergy * 1.375;
        } else if (obj.activityLevel === "moderateActivity") {
            TDEE = restingEnergy * 1.55;
        } else if (obj.activityLevel === "veryActive") {
            TDEE = restingEnergy * 1.725;
        }

        if (obj.goal === "Lose") {
            totalTDEE = TDEE - ( TDEE * .20 )
        } else if (obj.goal === "Lose10") {
            totalTDEE = TDEE - ( TDEE * .10 )
        } else if (obj.goal === "Gain") {
            totalTDEE = TDEE + ( TDEE * .20)
        }     
        return Math.round(totalTDEE);
    }

    handleSubmitUserStats(event) {
        event.preventDefault()
        let calcCalories;
        let macrosNutrients;
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

        calcCalories = this.calculateMacros(userBodyData);
        macrosNutrients = this.calculateMacrosNutrients(calcCalories)
        console.log('calories', calcCalories)
        console.log('macroNutrients', macrosNutrients)
        
        axios.post('banx/userStats', userBodyData)
          .then((response)=>{
            this.setState({
                calories: calcCalories
            })
          })
          .catch((error)=> {
            console.log(error);
          });
    }

    calculateMacrosNutrients(calories) {
        var obj = {};
        obj["proteins"] = calories / 4;
        obj["carbs"] = calories / 4;
        obj["fats"] = calories / 9;

        return obj;
    }

    // clearState() {
    //     this.setState({
    //         activityLevel: "sedentary",
    //         goal: "Lose",
    //         gender: "Male",
    //         weight: 0,
    //         height: 0,
    //         age: 0,
    //         // calories: ""
    //     })
    // }

    render() {
        // if (this.state.compiledData) {
        //     return <Redirect to='/' />
        // }
        return (
            <div className = "profile">
               <div className = "calorie">
                <DailySummary calories={this.state.calories}/>
               </div>
            <br/>


            
                <form>
                <h2>Profile</h2>
                <Divider/>
                    <label>
                    <br/>
                    Age:<br/>
                    <input type="number" placeholder="Age" onChange={this.handleAge} />

                      <div>
    <DatePicker hintText="Birthdate" openToYearSelection={true} />
  </div>
                    </label>

                    <br/> <br/>
                    <label>
                    Current Height:<br/>
                    <input type="number" placeholder="Feet" onChange={this.handleFeet}/><br/>
                    <input type="number" placeholder="Inches" onChange={this.handleInches} />
                    </label>  

                        

                    <br/>

                       <label>                

    <TextField
      hintText="number"
      floatingLabelText="Weight in lbs"
      floatingLabelFixed={true}
      onChange={this.handleWeight}/>
    <br />
                    </label>
                    <br/>
                    <label>
  <SelectField
          floatingLabelText="Activity"
          value={this.state.value}
          onChange={this.handleActivityLevel}
          style={styles.customWidth}
        >
          <MenuItem value={1} primaryText="Sedentary" />
          <MenuItem value={2} primaryText="Light Activity" />
          <MenuItem value={3} primaryText="Moderate Activity" />
          <MenuItem value={4} primaryText="Very Active" />
        </SelectField>
                    </label>
                    <br />
                    <label>

<SelectField
          floatingLabelText="Gender"
          value={this.state.value2}
          onChange={this.handleGender}
          style={styles.customWidth}
        >
          <MenuItem value={5} primaryText="Male" />
          <MenuItem value={6} primaryText="Female" />
        </SelectField>
                    </label>
                    <br />
                    <label>
<SelectField
          floatingLabelText="Goal"
          value={this.state.value3}
          onChange={this.handleGoal}
          style={styles.customWidth}
        >
          <MenuItem value={7} primaryText="Lose weight" />
          <MenuItem value={8} primaryText="Lose 10lbs" />
          <MenuItem value={9} primaryText="Maintain weight" />
          <MenuItem value={10} primaryText="Gain weight" />
        </SelectField>
                    </label>

  <br/>

<br/>
        <RaisedButton label="Submit" primary={true} onClick={() => this.handleSubmitUserStats}/>
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