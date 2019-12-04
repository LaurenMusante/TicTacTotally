import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { connect } from 'react-redux';
import Header from './Header';
import Grid from './Grid';
import { createStore } from 'redux';


class App extends React.Component {
    constructor(props) {
        super(props);
        
    }
render() {
    return(
        <div>
            <Header />
            <Grid />


        </div>
    )
    }
};

const mapStateToProps = state => {
    return {
        state
    }
}
export default connect(mapStateToProps)(App); //connect runs on mapStateToProps, then returns a new function to run on App.