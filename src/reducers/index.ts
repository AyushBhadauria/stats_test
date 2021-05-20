import { combineReducers } from 'redux';
import {
    UserStatsState,
    statsReducer
} from './stats.reducer';

export interface State {
    stats: UserStatsState
}

export const rootReducers = combineReducers<State>({
    stats: statsReducer
});