import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './HomeScreenStyles';
import {HomeScreenProps} from '@/types/navigations';
import SearchIcon from '@/assets/svg/search.svg';
import BannersSection from '@/sections/Banners/BannersSection';
import ContinueWatchSection from '@/sections/ContinueWatch/ContinueWatchSection';
import CategorySection from '@/sections/Category/CategorySection';
import {BookCategory} from '@/types/BooksPayload';
// import GiftIcon from '@/assets/svg/gift.svg';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const handleSearch = () => {};

  const sectionsOrder = [
    'banner',
    'continue_watch',
    'tranding',
    'romance',
    'coming_soon',
  ];

  const sectionsMap: Record<string, JSX.Element> = {
    banner: <BannersSection />,
    continue_watch: <ContinueWatchSection />,
    tranding: <CategorySection category={BookCategory.tranding} />,
    romance: <CategorySection category={BookCategory.romance} />,
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Home</Text>
        {/* <GiftIcon height={48} width={48} /> */}

        <TouchableOpacity onPress={handleSearch}>
          <View style={styles.headerSearchIconContainer}>
            <SearchIcon height={24} width={24} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {sectionsOrder.map(section => sectionsMap[section])}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
