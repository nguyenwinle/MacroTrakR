import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery';
import USDAsearch from './USDAsearch.jsx';
import DailySummary from './DailySummary.jsx'
import { connect } from 'react-redux';
import axios from 'axios'
import Paper from 'material-ui/Paper';
import Header from './Header.jsx'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchItem : "",
      caloriesLeft : null,
      allFoods : []
    }
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




  render () {
    const iconStyles = {
      marginRight: 24,
    };

    return (
    <div className="mainCenter">
      <DailySummary/>
     <USDAsearch/>
      <div>

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
