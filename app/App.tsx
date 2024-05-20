import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootContainer from '@/components/RootContainer/RootContainer';
import AppNavigation from './navigation/AppNavigation';

import '@/i18n/i18n';

const App = () => {
  return (
    // <Provider store={store}>
    <GestureHandlerRootView style={styles.gestureContainer}>
      <RootContainer>
        <AppNavigation />
      </RootContainer>
    </GestureHandlerRootView>
    // </Provider>
  );
};

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
  },
});

export default App;
