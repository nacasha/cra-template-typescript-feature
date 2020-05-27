import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';

import { browserHistory } from 'src/router';

import persistConfig from './persist/config';

/**
 * Bind react-router into redux reducer
 */
const router = connectRouter(browserHistory);

/**
 * Create root reducer of redux store
 */
const rootReducer = combineReducers({
  router,
});

export default persistReducer(persistConfig, rootReducer);
