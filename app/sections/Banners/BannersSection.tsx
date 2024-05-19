import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './BannersSectionStyles';
import metrics from '@/utils/metrics';
import Carousel from 'react-native-reanimated-carousel';
import Animated from 'react-native-reanimated';

import FastImageBackground from '@/components/FastImageBackground/FastImageBackground';

import AppIcon from '@/assets/svg/logo.svg';
import {images} from '@/theme';
import VideoTag from '@/components/VideoTag/VideoTag';
import BannerPayload from '@/types/BannersPayload';

const BANNER_PHOTO_WIDTH = 328;
const BANNER_PHOTO_HEIGHT = 216;

const data: BannerPayload[] = [
  {
    id: 1,
    title: 'Lethal Limits 1',
    description: "Dustin's Gamble",
    tag: 'romance',
    image: require('@/assets/img/bannerPhoto.png'),
  },
  {
    id: 2,
    title: 'Lethal Limits 2',
    description: "Dustin's Gamble",
    tag: 'romance',
    image: require('@/assets/img/bannerPhoto.png'),
  },
];

const BannersSection = () => {
  return (
    <View style={styles.container}>
      <Carousel
        vertical={false}
        // loop={false}
        autoPlay
        height={BANNER_PHOTO_HEIGHT}
        width={BANNER_PHOTO_WIDTH + metrics.appPaddingHorizontal * 2}
        style={{
          width: metrics.screenWidth,
        }}
        data={data}
        renderItem={CarouselItem}
        pagingEnabled
        snapEnabled
        autoPlayInterval={3000}
        scrollAnimationDuration={1000}
      />
    </View>
  );
};

const CarouselItem = ({item, index}: {item: BannerPayload; index: number}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  const handleOnPress = () => {
    console.log('hello');
  };

  return (
    <FastImageBackground
      key={index}
      onLoad={handleOnLoad}
      source={item.image}
      style={styles.carouselItemContainer}>
      <>
        <Animated.Image source={images.gradient} style={styles.gradient} />

        {!isLoaded ? (
          <View style={styles.skeletonContainer}>
            <AppIcon />
          </View>
        ) : (
          <Pressable
            onPress={handleOnPress}
            style={styles.itemContentContainer}>
            <VideoTag text={item.tag} />
            <View style={styles.contentTextContainer}>
              <Text style={styles.contentTitle}> {item.title} </Text>
              <Text style={styles.contentDescription}>{item.description}</Text>
            </View>
          </Pressable>
        )}
      </>
    </FastImageBackground>
  );
};

export default BannersSection;
