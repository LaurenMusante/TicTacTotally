import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import EndGameScenario from './EndGameScenario';

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
    function renderGridOrEndgame(stateSlice){
        if(stateSlice == null){
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
            <button onClick={handleRestart}>Restart Game</button>
        </div>
            );
        }
        else if(stateSlice =='🥕'){
            return <h1>🥕</h1>;
        }
        else if( stateSlice == '🍰'){
            return <h1>🍰</h1>;
        }
    }
    var renderGrid = renderGridOrEndgame(props.EndGameScenario);
console.log(renderGrid);
    return (
        <div>

            {renderGrid}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        gameState: state.dataReducer,
        EndGameScenario: state.endGameReducer
    }
}

export default connect(mapStateToProps)(Grid);