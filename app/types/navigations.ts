import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// Определите параметры для каждого экрана
export type RootStackParamList = {
  Home: undefined; // Нет параметров
  Watch: {serialId: string; episodeId?: string};
};

// Типы для пропсов навигации и маршрутов для экрана Home
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

// Типы для пропсов навигации и маршрутов для экрана Watch
type WatchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Watch'
>;

type WatchScreenRouteProp = RouteProp<RootStackParamList, 'Watch'>;

export type WatchScreenProps = {
  navigation: WatchScreenNavigationProp;
  route: WatchScreenRouteProp;
};
