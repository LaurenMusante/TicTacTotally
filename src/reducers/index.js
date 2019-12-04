import dataReducer from './game-data-reducer';
import playerReducer from './player-turn-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    gameState: dataReducer,
    playerState: playerReducer
});

export default rootReducer;