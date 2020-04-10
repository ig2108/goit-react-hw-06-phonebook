import { createStore, combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import сontactFormReducer from './contactForm/сontactFormReducer';
import filterReducer from './filter/filterReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  contacts: сontactFormReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
