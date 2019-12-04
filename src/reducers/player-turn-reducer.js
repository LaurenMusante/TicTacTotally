export default (state = { activePlayer : 1}, action) => {
    switch(action.type){
        case 'END_TURN_PLAYER_ONE':
        let newState = Object.assign({}, state, {activePlayer: 2})
        return newState;
        case 'END_TURN_PLAYER_TWO':
        let newState = Object.assign({}, state, {activePlayer: 1})
        return newState;
        default: 
        return state;
    }   
    
};