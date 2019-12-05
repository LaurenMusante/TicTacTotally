export default (state = {}, action) => {
    let newState;
    switch(action.type){
        case 'LARGE_CARROT':
            newState = '🥕';
            return newState;

        case 'LARGE_CAKE':
            newState = '🍰';
            return newState;
        default: 
        return state;
    }   
    
};