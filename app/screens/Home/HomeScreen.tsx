import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './HomeScreenStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeScreenProps} from '@/types/navigations';
import SearchIcon from '@/assets/svg/search.svg';
// import GiftIcon from '@/assets/svg/gift.svg';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const handleWatch = () => {
    navigation.navigate('Watch', {
      videoId: '123',
    });
  };

  const handleSearch = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle} onPress={handleWatch}>
          Home
        </Text>
        {/* <GiftIcon height={48} width={48} /> */}

        <TouchableOpacity onPress={handleSearch}>
          <View style={styles.headerSearchIconContainer}>
            <SearchIcon height={24} width={24} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
