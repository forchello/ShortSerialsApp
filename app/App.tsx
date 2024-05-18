import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootContainer from '@/components/RootContainer/RootContainer';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenNames} from './constants';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home/HomeScreen';
import WatchScreen from './screens/Watch/WatchScreen';

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

const forFade = ({current}: any) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Stack = createStackNavigator<any>();

const AppNavigation = () => {
  return (
    <NavigationContainer ref={undefined}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: forFade,
        }}
        initialRouteName={ScreenNames.Home}>
        <Stack.Screen name={ScreenNames.Home} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.Watch} component={WatchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
  },
});

export default App;
