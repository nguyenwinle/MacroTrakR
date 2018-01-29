import React from 'react';
import axios from 'axios';
import USDAresultsList from './USDAresultsList.jsx';
import NdbnoResultsList from './NdbnoResultsList.jsx';  
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { connect } from 'react-redux'
import helpers from '../helpers.js';

class USDAsearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            usdaList: [],
            usdaResults: [],
            testState: '',
            ndbno: null,
            nutrients: []
        }
        this.handleSearchInput = this.handleSearchInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSaveToDB = this.handleSaveToDB.bind(this)
    }

handleSearchInput(event) {
    event.preventDefault();
    this.setState({
        searchInput: event.target.value
    })
}

handleSubmit(event) {
    event.preventDefault()
    console.log('clientside post sbumit invoked')
    axios.post('/banx/usdaDB', {
        searchTerm: this.state.searchInput,
      })
    .then((response) => {
        console.log(response.data)
        this.setState({
            usdaResults : response.data.list.item
        })
    })
    .catch((error) => {
    console.log(error);
    });
}

handleSubmitNDBNO() {
    console.log('ndbno state', this.state.ndbno)
    event.preventDefault()
    console.log("clientside ndbno",this.state.ndbno)
    axios.get('banx/usdaReport', {
        params: {
            ndbno : this.state.ndbno
        }
    })
    .then((response) =>{
        console.log('clientside', response.data.report.food.nutrients)
        this.setState({
            searchInput: '',
            usdaList: [],
            ndbno: null,
            usdaResults: [],
            testState: '',
            nutrients: response.data.report.food.nutrients
        })
    })
    .catch((error) => {
        console.log(error)
    })
  
}

handleClick(num) {
    console.log('handleClick', this.props)
    this.setState({
        ndbno: num
    }, () => {
        this.handleSubmitNDBNO();
    })
}

handleSaveToDB() {
    var redesignedObj = helpers.redesign(this.state.nutrients)
    const { email } = this.props
    console.log('redesignedObj', redesignedObj)
    redesignedObj['email'] = email;
    console.log('savetodb', redesignedObj)
    axios.post('/banx/caloriesInput', redesignedObj)
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

render() {
    if (this.state.testState) {
        return <div>hi</div>
    }
    return (
    <div>
          <FloatingActionButton type="submit" value="add to my daily intake" onClick={this.handleSaveToDB}>
            <ContentAdd />
         </FloatingActionButton>
        <form>
        <label>
            <input type="text" value={this.state.searchInput} onChange={this.handleSearchInput}/>
        </label>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
    <USDAresultsList 
    usdaResults={this.state.usdaResults}
    handleClick={this.handleClick}
    />
    <NdbnoResultsList
    nutrient={this.state.nutrients}
    />
    </div>
    )}
}

const mapStateToProps = (state) => {
    const { email } = state;
    return {
        email
    }
}

export default connect(mapStateToProps, null)(USDAsearch);