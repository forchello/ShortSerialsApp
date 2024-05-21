import {AsyncActionError, AppStateProps} from '@/types/redux';
import {AppDispatch} from '../store';
import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StorageKeys from '@/constants/StorageKeys';
import initialState from './initialState';

const AsyncTypes = {
  getStorageApp: 'app/get_storage_app',
};

export const getStorageApp = createAsyncThunk<
  AppStateProps,
  undefined,
  {dispatch: AppDispatch; rejectValue: AsyncActionError}
>(AsyncTypes.getStorageApp, (_, thunkApi) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(StorageKeys.APP_DATA)
      .then(appData => {
        resolve(appData ? JSON.parse(appData) : initialState);
      })
      .catch(err => {
        reject(thunkApi.rejectWithValue(err));
      });
  });
});

export const AsyncActions = (builder: any) => {
  builder
    .addCase(getStorageApp.pending, (_state: any) => {})
    .addCase(getStorageApp.fulfilled, (state: any, action: any) => {
      const {continueWatch} = action.payload;

      state.continueWatch = continueWatch;
    });
};
