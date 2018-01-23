import React from 'react';
import axios from 'axios';
import USDAresultsList from './USDAresultsList.jsx';

class USDAsearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            usdaList: [],
            usdaResults: []
        }
        this.handleSearchInput = this.handleSearchInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        this.setState({
            usdaResults : response.data.list.item
        })
        console.log('usdaList after setSteate', this.state.usdaList)
    })
    .catch((error) => {
    console.log(error);
    });
}

render() {
    return (
    <div>
        <form>
        <label>
            <input type="text" value={this.state.searchInput} onChange={this.handleSearchInput}/>
        </label>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
    <USDAresultsList usdaResults={this.state.usdaResults}/>
    </div>
    )}
}

export default USDAsearch;