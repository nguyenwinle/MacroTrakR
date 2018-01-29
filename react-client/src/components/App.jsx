import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            signedIn: false
        }
    }

    handleRerender() {
        this.setState({
            signedIn: true
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

export default App;