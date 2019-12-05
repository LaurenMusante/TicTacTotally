export default (state = { end: ''}, action) => {
    let newState;
    switch(action.type){
        case 'LARGE_CARROT':
            newState = {end: '🥕'};
            return newState;

        case 'LARGE_CAKE':
            newState = {end: '🍰'};
            return newState;
        default: 
        return state;
    }   
    
};