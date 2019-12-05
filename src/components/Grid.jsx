import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';


function Grid (props) {
    const rowCSS = {
        display: 'flex',
        justifyContent: 'center'
    }
    const restartGameStyle= {
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center'
    }
    const winnerStyle= {
        fontSize: '100px'
    }

    function handleRestart() {
        const { dispatch } = props;
        const action = { type: 'RESTART'}
        dispatch(action);
        console.log(props)

    }
    console.log(props.endGameScenario);
    function renderGridOrEndgame(stateSlice){
        console.log(stateSlice) 
        const { end } = stateSlice;
        if(end == ''){
            return(
        <div className="">
            <div style={rowCSS} className="row">
            <div className=""><Square id='0'/></div>
            <div className=""><Square id='1'/></div>
            <div className=""><Square id='2'/></div>
            </div>
            <div style={rowCSS} className="row">
            <div className=""><Square id='3'/></div>
            <div className=""><Square id='4'/></div>
            <div className=""><Square id='5'/></div>
            </div>
            <div style={rowCSS} className="row">
            <div className=""><Square id='6'/></div>
            <div className=""><Square id='7'/></div>
            <div className=""><Square id='8'/></div>
            </div>
            <br/>
        </div>
            );
        }
        else if(end == '🥕'){
            return (
            <div style={rowCSS}>
                <h1 style={winnerStyle}>🥕</h1>
            </div>
            )}
        else if( end == '🍰'){
            return (
                <div style={rowCSS}>
                     <h1 style={winnerStyle}>🍰</h1>
                </div>
            )}
    }
    
    console.log("tacos",props.endGameScenario);
    return (
        <div className='center'>

            {renderGridOrEndgame(props.endGameScenario)}
            <div style={rowCSS} className="center">
                <button style={restartGameStyle} className="btn-small" onClick={handleRestart}>Restart Game</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        gameState: state.gameState,
        endGameScenario: state.endGameScenario
    }
}

export default connect(mapStateToProps)(Grid);