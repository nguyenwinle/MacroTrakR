import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery';
import List from './List.jsx';
import { connect } from 'react-redux';
import axios from 'axios'
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      searchItem : "",
      caloriesLeft : null,
      allFoods : []
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSaveToDB = this.handleSaveToDB.bind(this)
    // this.handleGetFromDB = this.handleGetFromDB.bind(this)
    this.handleGetAllEntriesFromDB = this.handleGetAllEntriesFromDB.bind(this)
  }

  handleGetAllEntriesFromDB() {
    console.log('handle get from db here')
    axios.get('/banx/getAllEntries')
    .then((response) => {
      console.log('clientside all entries',response)
      this.setState({
        allFoods: response.data,
        items: [],
        searchItem : "",
        caloriesLeft : null,
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleUserInput(event) {
    this.setState({
      searchItem: event.target.value,
      caloriesLeft: null
    })
  }

  // handleGetFromDB() {
  //   axios.get('/banx/getCalories')
  //   .then((response) => {
  //     console.log('db get', response.data.caloriesLeft)
  //     this.setState({
  //       caloriesLeft: response.data.caloriesLeft,
  //       items: []
  //     })
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }


  handleSaveToDB() {
    let nutritionOBj = this.state.items[0];
    const { email } = this.props
    nutritionOBj['email'] = email;
    axios.post('/banx/caloriesInput', nutritionOBj)
    .then(() => {
      this.setState({
        items: [],
        searchItem: ""
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  handleSubmit(event) {
    event.preventDefault()
    axios.post('/banx/searchNutrition', {
      query: this.state.searchItem
    })
    .then((response) => {
      console.log(response.data)
      let results = response.data.foods[0];
      let tempList = []
      tempList.push({
        fats: results.nf_total_fat,
        Saturated: results.nf_saturated_fat,
        // Polyunsaturated: '',
        // Monounsaturated: '',
        // Trans : '',
        cholesterol: results.nf_cholesterol,
        sodium: results.nf_sodium,
        Potassium: results.nf_potassium,
        carbs: results.nf_total_carbohydrate,
        fiber: results.nf_dietary_fiber,
        sugars: results.nf_sugars,
        protein: results.nf_protein,
        // VitaminA: '',
        // VitaminC: '',
        // Calcium: '',
        // Iron: '',
        calories: results.nf_calories,
      })
      this.setState({
        items: tempList
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    const iconStyles = {
      marginRight: 24,
    };

    return (
      
    <div className="mainCenter">
      {/* <Paper zDepth={5} className="test" > */}
      <h1>MacroTraKR</h1>
      <div>
        <form>
          <label>
            <input type="text" value={this.state.searchItem} name="name" onChange={this.handleUserInput} />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
      <List 
      items={this.state.items}
      searchItem={this.state.searchItem}
      />
      <div>
      {this.state.caloriesLeft ? "Based on a 2000 calorie diet, you currently have " + this.state.caloriesLeft + " calories left for the day" : ""}<br/><br/>
      </div>
      <div>
        <Paper zDepth={3}>
        {this.state.allFoods ? this.state.allFoods.map((entry, index) =>
          <li key={index} className="listItem">{entry.searchItem}  {"    "} {entry.calories} 
        </li>) : "" }
        </Paper>
      </div>
      <div>
     
     {/* <input type="submit" value="how many calories do i have left" onClick={this.handleGetFromDB}/><br/><br/>       */}
    </div> 
      </div>
  
        {/* <Paper zDepth={3} className='footer'> */}
          {/* <BottomNavigation selectedIndex={this.state.selectedIndex}> */}
          {/* <BottomNavigationItem */}
          {/* label="Diary"
          icon={recentsIcon}
          onClick={this.handleGetAllEntriesFromDB}
          /> */}
          <FloatingActionButton type="submit" value="add to my daily intake" onClick={this.handleSaveToDB}>
            <ContentAdd />
         </FloatingActionButton><br/><br/>
        {/* <BottomNavigationItem */}
        {/* label="Nearby"
        icon={nearbyIcon}
        onClick={() => this.select(2)}
        /> */}
        {/* </BottomNavigation> */}
        {/* </Paper> */}
    </div>
    )
  }
}

const mapStateToProps = function(state) {
    const { email } = state;
    return {
        email
    }
}

export default connect(mapStateToProps, null)(Landing);
