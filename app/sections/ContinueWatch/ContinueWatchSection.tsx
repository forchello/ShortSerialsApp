import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

import styles from './ContinueWatchSectionStyles';

import SectionTitle from '@/components/SectionTitle/SectionTitle';
import FastImage from 'react-native-fast-image';

import ArrowIcon from '@/assets/svg/arrow.svg';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '@/redux/hooks';
import {images} from '@/theme';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@/types/navigations';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '@/constants';

const ContinueWatchSection = () => {
  // const continueItem = {
  //   id: 1,
  //   title: 'Boss With Benefits',
  //   description: 'Kelly Nite',
  //   image: require('@/assets/img/book_6.png'),
  // };

  const {continueWatch, remoteConfig} = useAppSelector(state => state.app);
  const scale = useSharedValue<number>(1);

  const {t} = useTranslation();

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

  const handleOnPressIn = () => {
    scale.value = withTiming(0.97, {duration: 200});
  };

  const handleOnPressOut = () => {
    scale.value = withTiming(1, {duration: 200});
  };

  if (!continueWatch) {
    return null;
  } else {
    const continueWatchItem = remoteConfig.home_banners.find(
      item => item.id === continueWatch.serialId,
    );

    const handleOnPress = () => {
      if (continueWatchItem && continueWatch) {
        navigation.navigate(ScreenNames.Watch, {
          serialId: continueWatchItem.id,
          episodeId: continueWatch.episodeId,
          time: continueWatch.time,
        });
      }
    };

    if (!continueWatchItem) {
      return null;
    } else {
      return (
        <View style={styles.container}>
          <SectionTitle title={t('category.continueWatching')} />
          <Pressable
            onPressIn={handleOnPressIn}
            onPressOut={handleOnPressOut}
            onPress={handleOnPress}>
            <Animated.View
              style={[styles.contentWrapper, {transform: [{scale: scale}]}]}>
              {/* use source={uri: '...'} for remote images */}
              <FastImage
                source={images[continueWatchItem.id]}
                style={styles.image}
              />
              <View style={styles.contentContainer}>
                <View style={styles.contentTextContainer}>
                  <Text style={styles.contentTitle}>
                    {continueWatchItem.title}
                  </Text>
                  <Text style={styles.contentDescription}>
                    {continueWatchItem.description}
                  </Text>
                </View>
                <ArrowIcon height={30} width={30} style={styles.arrowIcon} />
              </View>
            </Animated.View>
          </Pressable>
        </View>
      );
    }
  }
};

export default ContinueWatchSection;
