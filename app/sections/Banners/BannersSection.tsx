import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './BannersSectionStyles';
import metrics from '@/utils/metrics';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

import FastImageBackground from '@/components/FastImageBackground/FastImageBackground';

import AppIcon from '@/assets/svg/logo.svg';
import {images} from '@/theme';
import VideoTag from '@/components/VideoTag/VideoTag';
import BannerPayload from '@/types/BannersPayload';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '@/constants';
import {RootStackParamList} from '@/types/navigations';
import {StackNavigationProp} from '@react-navigation/stack';

const BANNER_PHOTO_WIDTH = 328;
const BANNER_PHOTO_HEIGHT = 216;

const data: BannerPayload[] = [
  {
    id: 'lethel_limits_s1',
    title: 'Lethal Limits 1',
    description: "Dustin's Gamble",
    tag: 'romance',
    image: require('@/assets/img/bannerPhoto.png'),
  },
  {
    id: 'lethel_limits_s2',
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
        autoPlayInterval={10000}
        scrollAnimationDuration={1000}
      />
    </View>
  );
};

const CarouselItem = ({item, index}: {item: BannerPayload; index: number}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const scale = useSharedValue<number>(1);

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  const handleOnPressIn = () => {
    scale.value = withTiming(0.97, {duration: 200});
  };

  const handleOnPressOut = () => {
    scale.value = withTiming(1, {duration: 200});
  };

  const handleOnPress = () => {
    navigation.navigate(ScreenNames.Watch, {
      serialId: item.id,
    });
  };

  return (
    <Animated.View
      style={[styles.carouselItemContainer, {transform: [{scale: scale}]}]}>
      <Pressable
        onPressIn={handleOnPressIn}
        onPressOut={handleOnPressOut}
        onPress={handleOnPress}
        disabled={!isLoaded}>
        <FastImageBackground
          key={index}
          onLoad={handleOnLoad}
          source={item.image}
          style={{width: '100%', height: '100%'}}>
          <>
            <Animated.Image source={images.gradient} style={styles.gradient} />

            {!isLoaded ? (
              <View style={styles.skeletonContainer}>
                <AppIcon />
              </View>
            ) : (
              <View style={styles.itemContentContainer}>
                <VideoTag text={item.tag} />
                <View style={styles.contentTextContainer}>
                  <Text style={styles.contentTitle}>{item.title}</Text>
                  <Text style={styles.contentDescription}>
                    {item.description}
                  </Text>
                </View>
              </View>
            )}
          </>
        </FastImageBackground>
      </Pressable>
    </Animated.View>
  );
};

export default BannersSection;
