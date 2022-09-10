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
import { baseApi } from './baseApi';
import balanceReducer from './balance/balanceSlice';
import balanceNumReducer from './balance/balanceNum';
import calendarReducer from './calendar/calendarSlice';
import reportReducer from './feature/report/reportSlice';
import transactionsReducer from './transactions/transactionsSlice';
import transactionsDaysReducer from './transactions/transactionsDaysSlice';
import expensesReducer from './report/expensesSlice';
import reportDateSlice from './report/reportDateSlice';
import screenReducer from './screen/screenSlice';
import { rtkQueryErrorLogger } from './middleware/rtkQueryErrorLogger';
// import logger from 'redux-logger';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  [authApi.reducerPath]: authApi.reducer,
  balance: balanceReducer,
  balanceNum: balanceNumReducer,
  date: calendarReducer,
  transactionsDays: transactionsDaysReducer,
  transactions: transactionsReducer,
  summary: reportReducer,
  expenses: expensesReducer,
  dateReport: reportDateSlice,
  screenWidth: screenReducer,
  // [userApi.reducerPath]: userApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
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
      .concat([rtkQueryErrorLogger, baseApi.middleware]),
  // .concat(logger),
});

export const persistor = persistStore(store);
