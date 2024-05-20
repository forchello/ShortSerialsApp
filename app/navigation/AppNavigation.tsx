import React from 'react';
import {ScreenNames} from '@/constants';
import HomeScreen from '@/screens/Home/HomeScreen';
import WatchScreen from '@/screens/Watch/WatchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '@/types/navigations';

const forFade = ({current}: any) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
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

export default AppNavigation;
