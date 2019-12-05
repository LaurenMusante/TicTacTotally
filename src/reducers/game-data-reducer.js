export default (state = {}, action) => {
    let newState;
    const { id } = action;
    switch(action.type){
        case 'VAL_O':
            newState = Object.assign({}, state, { [id]: '🥕'})
            return newState

        case 'VAL_X':
            newState = Object.assign({}, state, { [id]: '🍰'})
            return newState
        case 'RESTART':
            newState = {}
            return newState
        default: 
        return state;
    }   
    
};