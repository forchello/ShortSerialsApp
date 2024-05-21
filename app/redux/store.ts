import {configureStore} from '@reduxjs/toolkit';
import {AppStateProps} from '@/types/redux';

import appReducer from './app/slice';

export const store = configureStore<{
  app: AppStateProps;
}>({
  reducer: {
    app: appReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: __DEV__,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
