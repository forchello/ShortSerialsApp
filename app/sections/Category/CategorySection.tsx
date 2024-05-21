import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import styles from './CategorySectionStyles';

import SectionTitle from '@/components/SectionTitle/SectionTitle';
import FastImage, {Source} from 'react-native-fast-image';

import Carousel from 'react-native-reanimated-carousel';
import metrics from '@/utils/metrics';
import {BOOKS_MOCKED_DATA} from '@/constants/BooksMockedData';
import sortBooksByCategory from '@/utils/sortBooksByCategory';
import {BookType} from '@/types/BooksPayload';
import {useTranslation} from 'react-i18next';

import {BlurView} from '@react-native-community/blur';

import AppIcon from '@/assets/svg/logo.svg';
import LockIcon from '@/assets/svg/lock.svg';

const BANNER_BOOK_WIDTH = 120;
const BANNER_BOOK_HEIGHT = 150;
const BANNER_BOOK_ITEM_HEIGHT = 220;

interface CategorySectionProps {
  category: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({category}) => {
  const data = sortBooksByCategory(BOOKS_MOCKED_DATA, category);

  const {t} = useTranslation();

  if (data.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SectionTitle title={t(`category.${category}`)} />

      <View style={styles.carouselContainer}>
        <Carousel
          vertical={false}
          loop={false}
          height={BANNER_BOOK_ITEM_HEIGHT}
          width={BANNER_BOOK_WIDTH + metrics.appPaddingHorizontal}
          style={{
            width: metrics.screenWidth,
          }}
          data={sortBooksByCategory(BOOKS_MOCKED_DATA, category)}
          renderItem={CarouselItem}
          pagingEnabled
          snapEnabled
          scrollAnimationDuration={1000}
        />
      </View>
    </View>
  );
};

const CarouselItem = ({item, index}: {item: BookType; index: number}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const scale = useSharedValue<number>(1);
  const {t} = useTranslation();

  const handleOnPressIn = () => {
    scale.value = withTiming(0.95, {duration: 200});
  };

  const handleOnPressOut = () => {
    scale.value = withTiming(1, {duration: 200});
    // logic for continue
    console.log('continue');
  };

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Pressable
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      disabled={!isLoaded || !!item.upcoming}>
      <Animated.View
        style={[
          styles.carouselItemContainer,
          {
            width: BANNER_BOOK_WIDTH,
          },
          {
            transform: [{scale: scale}],
          },
        ]}>
        {!isLoaded && (
          <Animated.View
            exiting={FadeOut.delay(200).duration(200)}
            style={[styles.skeletonContainer, {height: BANNER_BOOK_HEIGHT}]}>
            <AppIcon />
          </Animated.View>
        )}

        <FastImage
          source={item.image as Source}
          style={[styles.image, {height: BANNER_BOOK_HEIGHT}]}
          onLoad={handleOnLoad}
        />

        {item.upcoming && (
          <>
            <Animated.View
              entering={FadeIn.delay(200).duration(200)}
              exiting={FadeOut.delay(200).duration(200)}
              style={[
                styles.blurImageContainer,
                {
                  height: BANNER_BOOK_HEIGHT,
                },
              ]}>
              <View style={styles.blurImageContent}>
                <BlurView
                  blurAmount={30}
                  style={styles.blurLockImage}
                  blurType="light"
                  reducedTransparencyFallbackColor="white"
                  overlayColor="rgba(255,255,255,.3)"
                />
                <LockIcon />
              </View>
              <BlurView
                blurAmount={15}
                style={styles.blurImage}
                blurType="dark"
                reducedTransparencyFallbackColor="white"
              />
            </Animated.View>
            <Text style={styles.upcomingTitle}>
              {`${t('coming')} ${t(
                `month.${new Date(item.upcoming).getMonth()}`,
              )} ${new Date(item.upcoming).getDate()}`}
            </Text>
          </>
        )}

        <Text style={styles.bookTitle}>{item.title}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default CategorySection;
