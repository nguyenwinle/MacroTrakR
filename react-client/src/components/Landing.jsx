import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery';
import USDAsearch from './USDAsearch.jsx';
import DailySummary from './DailySummary.jsx'
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
import AppBar from 'material-ui/AppBar/AppBar';


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      searchItem : "",
      caloriesLeft : null,
      allFoods : []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSaveToDB = this.handleSaveToDB.bind(this)
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
      <DailySummary/>
      <USDAsearch/>
      <div>
        <Paper zDepth={3}>
        {this.state.allFoods ? this.state.allFoods.map((entry, index) =>
          <li key={index} className="listItem">{entry.searchItem}  {"    "} {entry.calories} 
        </li>) : "" }
        </Paper>
      </div> 
      {/* <AppBar>
      </AppBar> */}
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
