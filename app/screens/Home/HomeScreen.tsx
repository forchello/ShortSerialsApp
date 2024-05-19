import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './HomeScreenStyles';
import {HomeScreenProps} from '@/types/navigations';
import SearchIcon from '@/assets/svg/search.svg';
import {ScreenNames} from '@/constants';
import BannersSection from '@/sections/Banners/BannersSection';
import ContinueWatchSection from '@/sections/ContinueWatch/ContinueWatchSection';
// import GiftIcon from '@/assets/svg/gift.svg';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const handleWatch = () => {
    navigation.navigate(ScreenNames.Watch, {
      videoId: '123',
    });
  };

  const handleSearch = () => {};

  return (
    <View style={styles.container}>
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

      <ScrollView>
        <BannersSection />
        <ContinueWatchSection />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
