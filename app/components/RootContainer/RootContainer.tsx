import {getRemoteConfig} from '@/services/firebase';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import remoteConfigKeys from '@/constants/firebase/remoteConfigKeys';
import {useAppDispatch} from '@/redux/hooks';
import {setRemoteConfig} from '@/redux/app/slice';
import {getStorageApp} from '@/redux/app/async';

interface Props {
  children: React.ReactNode;
}

const RootContainer = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getRemoteConfig(remoteConfigKeys)
      .then(res => {
        dispatch(setRemoteConfig(res));
        dispatch(getStorageApp()).then(() => {
          RNBootSplash.hide({fade: true});
        });
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      {props.children}
    </>
  );
};

export default RootContainer;
