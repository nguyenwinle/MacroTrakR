import React from 'react';
import axios from 'axios';
import USDAresultsList from './USDAresultsList.jsx';

class USDAsearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            usdaList: [],
            usdaResults: [],
            testState: '',
            ndbno: null
        }
        this.handleSearchInput = this.handleSearchInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
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
        console.log('get in better shape', response.data.list.item)
        this.setState({
            usdaResults : response.data.list.item
        })
    })
    .catch((error) => {
    console.log(error);
    });
}

handleSubmitNDBNO() {
    console.log('clientside handleSubmitNDBNO invoked')
    event.preventDefault()
    axios.get('banx/usdaReport', {
        params: {
            ndbno : this.state.ndbno
        }
    })
    .then((response) =>{
        console.log('clientside response',response)
    })
    .catch((error) => {
        console.log(error)
    })

    // axios.get('/user', {
    //     params: {
    //       ID: 12345
    //     }
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  
}

handleClick(num) {
    console.log('handleClick', this.props)
    this.setState({
        ndbno: num
    }, () => {
        // this.handleSubmitNDBNO();
    })
}

render() {
    if (this.state.testState) {
        return <div>hi</div>
    }
    return (
    <div>
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
    </div>
    )}
}

export default USDAsearch;