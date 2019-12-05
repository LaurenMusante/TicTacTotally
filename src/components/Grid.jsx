import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';

function Grid (props) {
    const rowCSS = {
        display: 'flex',
        justifyContent: 'center'
    }

    function handleRestart() {
        const { dispatch } = props;
        const action = { type: 'RESTART'}
        dispatch(action);
        console.log(props)

    }

    return (
        <div className="">
            <div style={rowCSS} className="row">
            <div className=""><Square id='1'/></div>
            <div className=""><Square id='2'/></div>
            <div className=""><Square id='3'/></div>
            </div>
            <div style={rowCSS} className="row">
            <div className=""><Square id='4'/></div>
            <div className=""><Square id='5'/></div>
            <div className=""><Square id='6'/></div>
            </div>
            <div style={rowCSS} className="row">
            <div className=""><Square id='7'/></div>
            <div className=""><Square id='8'/></div>
            <div className=""><Square id='9'/></div>
            </div>
            <br/>
            <button onClick={handleRestart}>Restart Game</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        gameState: state.dataReducer
    }
}

export default connect(mapStateToProps)(Grid);