import {getRemoteConfig} from '@/services/firebase';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import remoteConfigKeys from '@/constants/firebase/remoteConfigKeys';

interface Props {
  children: React.ReactNode;
}

const RootContainer = (props: Props) => {
  useEffect(() => {
    getRemoteConfig(remoteConfigKeys)
      .then(res => {
        console.log('res', res);
        RNBootSplash.hide({fade: true});
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
