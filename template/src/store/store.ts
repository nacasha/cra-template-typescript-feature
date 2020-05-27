/**
 * This file does not need further configurations.
 * Only modify this file when need to adjust with application.
 */

import { configureStore } from '@reduxjs/toolkit';

import middlewares from './middlewares';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
