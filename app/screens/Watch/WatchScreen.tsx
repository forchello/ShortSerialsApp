import React, {useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, ViewToken} from 'react-native';
import styles from './WatchScreenStyles';
import {WatchScreenProps} from '@/types/navigations';
import FeedVideo from '@/components/FeedVideo/FeedVideo';
import {FeedVideosPayload} from '@/types/FeedVideosPayload';
import CloseIcon from '@/assets/svg/close.svg';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {ScreenNames} from '@/constants';
import {useTranslation} from 'react-i18next';

const data: Record<string, FeedVideosPayload[]> = {
  lethel_limits_s1: [
    {
      id: 'lethel_limits_s1_e1',
      name: 'Episode 1',
      uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/convertedwife.m3u8',
    },
    {
      id: 'lethel_limits_s1_e2',
      name: 'Episode 2',
      uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/2wife2.m3u8',
    },
    {
      id: 'lethel_limits_s1_e3',
      name: 'Episode 3',
      uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/3wife3.m3u8',
    },
    {
      id: 'lethel_limits_s1_e4',
      name: 'Episode 4',
      uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/4wife4.m3u8',
    },
    {
      id: 'lethel_limits_s1_e5',
      name: 'Episode 5',
      uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/5wife5.m3u8',
    },
    {
      id: 'lethel_limits_s1_e6',
      name: 'Episode 6',
      uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/6wife6.m3u8',
    },
    {
      id: 'lethel_limits_s1_e7',
      name: 'Episode 7',
      uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/7wife7.m3u8',
    },
    {
      id: 'lethel_limits_s1_e8',
      name: 'Episode 8',
      uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/8wife8.m3u8',
    },
  ],
};

const WatchScreen: React.FC<WatchScreenProps> = ({route, navigation}) => {
  const {serialId, episodeId} = route.params;
  const episodes: FeedVideosPayload[] = data[serialId];

  const {t} = useTranslation();

  const handleOnExit = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate(ScreenNames.Home);
    }
  };

  if (!episodes) {
    return (
      <View style={styles.notFoundContainer}>
        <Animated.View
          style={styles.headerContainer}
          entering={FadeIn.delay(200).duration(200)}
          exiting={FadeOut.delay(200).duration(200)}>
          <View style={styles.headerCloseIcon}>
            <TouchableOpacity onPress={handleOnExit}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
        </Animated.View>

        <Text style={styles.notFoundTitle}>{t('videoNotFound')}</Text>
      </View>
    );
  }

  return (
    <WatchingContent
      episodes={episodes}
      onExit={handleOnExit}
      episodeId={episodeId}
    />
  );
};

const WatchingContent = ({
  episodes,
  episodeId,
  onExit,
}: {
  episodes: FeedVideosPayload[];
  episodeId?: string;
  onExit: () => void;
}) => {
  const [activeItemId, setActiveItemId] = useState<string>(episodes[0].id);
  const [prevItemId, setPrevItemId] = useState<string>(episodes[0].id);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const feedRef = useRef<FlatList>(null);

  useEffect(() => {
    if (feedRef.current && episodeId) {
      const index = episodes.findIndex(item => item.id === episodeId);

      if (index !== -1) {
        feedRef.current.scrollToIndex({
          index: index,
          animated: false,
        });
      }
    }
  }, [episodeId]);

  const currentItem = useMemo(() => {
    return episodes.find(item => item.id === activeItemId);
  }, [activeItemId, episodes]);

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {itemVisiblePercentThreshold: 50},
      onViewableItemsChanged: ({changed}: {changed: ViewToken[]}) => {
        if (changed.length > 0) {
          if (changed[0].isViewable) {
            setActiveItemId(changed[0].item.id);
          }
          if (changed[1]) {
            setPrevItemId(changed[1].item.id);
          }
        }
      },
    },
  ]);

  const handleOnEndReached = () => {
    console.log('onEndReached');
  };

  const handleOnFirstItemLoaded = () => {
    setIsLoaded(true);
  };

  const onScrollToIndexFailed = ({index}: {index: number}) => {
    const wait = new Promise(resolve => setTimeout(resolve, 500));
    wait.then(() => {
      feedRef.current?.scrollToIndex({index, animated: false});
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={styles.headerContainer}
        entering={FadeIn.delay(200).duration(200)}
        exiting={FadeOut.delay(200).duration(200)}>
        <View style={styles.headerCloseIcon}>
          <TouchableOpacity onPress={onExit}>
            <CloseIcon />
          </TouchableOpacity>
        </View>
        {isLoaded && (
          <Animated.Text
            style={styles.headerTitle}
            entering={FadeIn.delay(200).duration(200)}
            exiting={FadeOut.delay(200).duration(200)}>
            {currentItem?.name}
          </Animated.Text>
        )}
      </Animated.View>

      <FlatList
        ref={feedRef}
        data={episodes}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <FeedVideo
            item={item}
            activeItemId={activeItemId}
            prevItemId={prevItemId}
            onFirstItemLoaded={handleOnFirstItemLoaded}
          />
        )}
        onScrollToIndexFailed={onScrollToIndexFailed}
        scrollEnabled={isLoaded}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={3}
      />
    </View>
  );
};

export default WatchScreen;
