export default (state = { activePlayer : 1}, action) => {
    let newState;
    switch(action.type){
        case 'END_TURN_PLAYER_ONE':
        newState = Object.assign({}, state, {activePlayer: 2})
        return newState;
        case 'END_TURN_PLAYER_TWO':
        newState = Object.assign({}, state, {activePlayer: 1})
        return newState;
        default: 
        return state;
    }   
    
};