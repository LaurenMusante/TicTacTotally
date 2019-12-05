import dataReducer from './game-data-reducer';
import playerReducer from './player-turn-reducer';
import endGameReducer from './end-game-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    gameState: dataReducer,
    playerState: playerReducer,
    endGameScenario: endGameReducer
});

export default rootReducer;