import React from 'react';
import { connect } from 'react-redux';
import EndGameScenario from './EndGameScenario'

class Square extends React.Component {
    constructor(props){
        super(props)
        this.handleClickingEmptySquare= this.handleClickingEmptySquare.bind(this);
        this.handleEndGameScenario= this.handleEndGameScenario.bind(this);
    }
    handleEndGameScenario(){
        console.log(this.props.endGameScenario);
        var endGame = EndGameScenario(this.props.gameState);
        console.log(this.props.gameState);
        let action;
        const { dispatch } = this.props;
        if(endGame == '🥕'){
            console.log('carrot')
             action = { type: 'LARGE_CARROT'}
             dispatch(action);
        }
        else if(endGame == '🍰'){
            action = { type: 'LARGE_CAKE' }
            console.log('cake')
            dispatch(action);
        }
    }
    
    handleClickingEmptySquare(){
        console.log(this.props);
        const { dispatch } = this.props;
        if(this.props.playerState.activePlayer=='1'){
            const action = { type: 'VAL_O', id: this.props.id }
            dispatch(action);
            const action2 = { type:'END_TURN_PLAYER_ONE'}
            dispatch(action2);
        }
        else{
            const action = { type: 'VAL_X', id: this.props.id }
            dispatch(action);
            const action2 = { type:'END_TURN_PLAYER_TWO'}
            dispatch(action2);
            
        }    
    }
    
    
    render() {
 
        console.log(EndGameScenario(this.props.gameState))
        const emojiStyle = {
            fontSize: '40px'
        }
            var conditionalRender;
            if(this.props.gameState[this.props.id] == "🥕"){
            conditionalRender= <p style = {emojiStyle}> 🥕</p>;
            }
            else if(this.props.gameState[this.props.id] == "🍰"){
                
            conditionalRender= <p style = {emojiStyle}> 🍰</p>;
                }
            else{     
                    conditionalRender =<button onClick={this.handleClickingEmptySquare} className="">HI</button>;
            }
            
            const buttonStyle = {
                height: '100px',
                width: '100px'
            }
            return (
                <div style = {buttonStyle} className="btn">
                {conditionalRender}
                </div>
        );
    }
};
const mapStateToProps = state => {
    return(state);
}

export default connect(mapStateToProps)(Square);