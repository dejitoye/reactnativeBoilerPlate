import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sampleReducer from './reducer/sampleReducer';
// import sampleReducer from './reducer';

const rootReducer = combineReducers({ 
    
    
    sample:sampleReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk))