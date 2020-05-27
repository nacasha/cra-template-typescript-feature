import storage from 'redux-persist/lib/storage';

const persistConfig = {
  storage,
  key: 'persisted',
  whitelist: ['storage'],
};

export default persistConfig;
