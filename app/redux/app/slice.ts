import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AppActions} from '../appActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeys} from '@/constants';
import initialState from './initialState';
import {AsyncActions} from './async';
import {ContinueWatchType} from '@/types/redux';

const appSlice = createSlice({
  name: AppActions.APP,
  initialState: initialState,
  reducers: {
    setRemoteConfig: (state, action: PayloadAction<any>) => {
      const newState = {
        ...state,
        remoteConfig: {...action.payload},
      };

      if (typeof action.payload.home_sections_order !== 'object') {
        newState.remoteConfig.home_sections_order =
          initialState.remoteConfig.home_sections_order;
      }

      if (typeof action.payload.home_banners !== 'object') {
        newState.remoteConfig.home_banners =
          initialState.remoteConfig.home_banners;
      }

      if (typeof action.payload.home_sections_data !== 'object') {
        newState.remoteConfig.home_sections_data =
          initialState.remoteConfig.home_sections_data;
      }

      state.remoteConfig = newState.remoteConfig;
    },
    setContinueWatch: (state, action: PayloadAction<ContinueWatchType>) => {
      const newState = {
        ...state,
        continueWatch: action.payload,
      };

      AsyncStorage.setItem(StorageKeys.APP_DATA, JSON.stringify(newState));
      state.continueWatch = newState.continueWatch;
    },
  },
  extraReducers: AsyncActions,
});

export const {setRemoteConfig, setContinueWatch} = appSlice.actions;

export default appSlice.reducer;
