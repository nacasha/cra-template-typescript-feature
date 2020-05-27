/**
 * This file does not need further configurations.
 * Only modify this file when need to adjust with application.
 */

import { persistReducer } from 'redux-persist';

import persistConfig from '../persist/config';
import store from '../store';

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../reducers', () => {
    // eslint-disable-next-line global-require
    const newRootReducer = require('../reducers').default;
    store.replaceReducer(persistReducer(persistConfig, newRootReducer));
  });
}
