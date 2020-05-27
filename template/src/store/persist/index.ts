/**
 * This file does not need further configurations.
 * Only modify this file when need to adjust with application.
 */

import { persistStore } from 'redux-persist';

import store from '../store';

const persistor = persistStore(store);

export default persistor;
