import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// Define parameters for each screen
export type RootStackParamList = {
  Home: undefined; // No parameters
  Watch: {serialId: string; episodeId?: string; time?: number};
};

// Types for navigation and route props for the Home screen
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

// Types for navigation and route props for the Watch screen
type WatchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Watch'
>;

type WatchScreenRouteProp = RouteProp<RootStackParamList, 'Watch'>;

export type WatchScreenProps = {
  navigation: WatchScreenNavigationProp;
  route: WatchScreenRouteProp;
};
