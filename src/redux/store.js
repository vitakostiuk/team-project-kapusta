import { configureStore, combineReducers } from '@reduxjs/toolkit';

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
import authReducer from './feature/authSlice';
import { authApi } from './authorization/authApi';
import { userApi } from './user/userApi';
import { transactionsApi } from './report/transactionsApi';
import balanceReducer from './Balance/balanceSlice';
import transactionsReducer from './report/transactionsSlice';
import expensesReducer from './report/expensesSlice';
import reportDateSlice from './report/reportDateSlice';
import logger from 'redux-logger';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  [authApi.reducerPath]: authApi.reducer,
  balance: balanceReducer,
  expenses: expensesReducer,
  dateReport: reportDateSlice,
  [userApi.reducerPath]: userApi.reducer,
  [transactionsApi.reducerPath]: transactionsApi.reducer,
  transactions: transactionsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(transactionsApi.middleware),
  // .concat(logger),
});

export const persistor = persistStore(store);
