import React, {useState} from 'react';
import {ImageSourcePropType, Pressable, Text, View} from 'react-native';
import styles from './BannersSectionStyles';
import metrics from '@/utils/metrics';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

import FastImageBackground from '@/components/FastImageBackground/FastImageBackground';

import AppIcon from '@/assets/svg/logo.svg';
import {images} from '@/theme';
import VideoTag from '@/components/VideoTag/VideoTag';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {ScreenNames} from '@/constants';
import {RootStackParamList} from '@/types/navigations';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAppSelector} from '@/redux/hooks';
import {Source} from 'react-native-fast-image';
import {SerialType} from '@/types/redux';
import {useTranslation} from 'react-i18next';

const BANNER_PHOTO_WIDTH = 328;
const BANNER_PHOTO_HEIGHT = 216;

const BannersSection = () => {
  const isFocused = useIsFocused();

  const remoteConfig = useAppSelector(state => state.app.remoteConfig);

  return (
    <View style={styles.container}>
      <Carousel
        vertical={false}
        loop={false}
        autoPlay={isFocused}
        height={BANNER_PHOTO_HEIGHT}
        width={BANNER_PHOTO_WIDTH + metrics.appPaddingHorizontal * 2}
        style={{
          width: metrics.screenWidth,
        }}
        data={remoteConfig.home_banners}
        renderItem={({item, index}) => (
          <CarouselItem
            itemId={item}
            index={index}
            item={remoteConfig.home_sections_data.find(
              dataItem => dataItem.id === item,
            )}
          />
        )}
        pagingEnabled
        snapEnabled
        autoPlayInterval={10000}
        scrollAnimationDuration={1000}
      />
    </View>
  );
};

const CarouselItem = ({
  itemId,
  item,
  index,
}: {
  itemId: string;
  item?: SerialType;
  index: number;
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const scale = useSharedValue<number>(1);

  const {t} = useTranslation();

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
      serialId: itemId,
    });
  };

  if (!item) {
    return null;
  }

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
          source={images[item.id] as Source}
          style={{width: '100%', height: '100%'}}>
          <>
            <Animated.Image
              source={images.gradient as ImageSourcePropType}
              style={styles.gradient}
            />

            {!isLoaded ? (
              <View style={styles.skeletonContainer}>
                <AppIcon />
              </View>
            ) : (
              <View style={styles.itemContentContainer}>
                <VideoTag text={t(`tags.${item.category}`)} />
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
