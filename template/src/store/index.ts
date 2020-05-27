/**
 * This file does not need further configurations.
 * Only modify this file when need to adjust with application.
 */

import { ThunkAction, Action } from '@reduxjs/toolkit';

import './helpers/developmentMode';
import persistor from './persist';
import reducer from './reducers';
import RootStore from './RootStore';
import store from './store';

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type RootState = ReturnType<typeof reducer>;

export { store, persistor, RootStore };
