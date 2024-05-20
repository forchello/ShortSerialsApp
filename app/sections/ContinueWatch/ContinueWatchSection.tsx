import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

import styles from './ContinueWatchSectionStyles';

import SectionTitle from '@/components/SectionTitle/SectionTitle';
import FastImage from 'react-native-fast-image';

import ArrowIcon from '@/assets/svg/arrow.svg';
import {useTranslation} from 'react-i18next';

const ContinueWatchSection = () => {
  const continueItem = {
    id: 1,
    title: 'Boss With Benefits',
    description: 'Kelly Nite',
    image: require('@/assets/img/book_6.png'),
  };

  const scale = useSharedValue<number>(1);

  const {t} = useTranslation();

  const handleOnPressIn = () => {
    scale.value = withTiming(0.97, {duration: 200});
  };

  const handleOnPressOut = () => {
    scale.value = withTiming(1, {duration: 200});
    // logic for continue
    console.log('continue');
  };

  if (!continueItem) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SectionTitle title={t('category.continueWatching')} />
      <Pressable onPressIn={handleOnPressIn} onPressOut={handleOnPressOut}>
        <Animated.View
          style={[styles.contentWrapper, {transform: [{scale: scale}]}]}>
          {/* use source={uri: '...'} for remote images */}
          <FastImage source={continueItem.image} style={styles.image} />
          <View style={styles.contentContainer}>
            <View style={styles.contentTextContainer}>
              <Text style={styles.contentTitle}>{continueItem.title}</Text>
              <Text style={styles.contentDescription}>
                {continueItem.description}
              </Text>
            </View>
            <ArrowIcon height={30} width={30} style={styles.arrowIcon} />
          </View>
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default ContinueWatchSection;
