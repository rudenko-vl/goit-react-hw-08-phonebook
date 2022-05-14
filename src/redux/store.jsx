import {
  configureStore,
    combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsApi } from './contactsApi';
import authReducer from './auth/auth-slice';
import { filter } from './filter/reduser';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  blacklist: ["filter"],
};

const store = configureStore({
  reducer: combineReducers({
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    filter,
  }),
    middleware: (getDefaultMiddlware) => getDefaultMiddlware({
        serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }).concat(contactsApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };