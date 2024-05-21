import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './HomeScreenStyles';
import {HomeScreenProps} from '@/types/navigations';
import SearchIcon from '@/assets/svg/search.svg';
import BannersSection from '@/sections/Banners/BannersSection';
import ContinueWatchSection from '@/sections/ContinueWatch/ContinueWatchSection';
import CategorySection from '@/sections/Category/CategorySection';
import {BookCategory} from '@/types/BooksPayload';
import {useAppSelector} from '@/redux/hooks';
// import GiftIcon from '@/assets/svg/gift.svg';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const handleSearch = () => {};

  const {remoteConfig} = useAppSelector(state => state.app);

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
        {remoteConfig.home_sections_order.order.map((value, index) => (
          <React.Fragment key={index}>{sectionsMap[value]}</React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
