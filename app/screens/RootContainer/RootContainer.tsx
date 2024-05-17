import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

interface Props {
  children: React.ReactNode;
}

const RootContainer = (props: Props) => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      {props.children}
    </>
  );
};

export default RootContainer;
