import React, {RefObject, useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, ViewToken} from 'react-native';
import styles from './WatchScreenStyles';
import {WatchScreenProps} from '@/types/navigations';
import FeedVideo from '@/components/FeedVideo/FeedVideo';
import CloseIcon from '@/assets/svg/close.svg';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {ScreenNames} from '@/constants';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '@/redux/hooks';
import {EpisodeType} from '@/types/redux';
import {VideoRef} from 'react-native-video';

const WatchScreen: React.FC<WatchScreenProps> = ({route, navigation}) => {
  const {serialId, episodeId, time} = route.params;

  const {t} = useTranslation();

  const remoteConfig = useAppSelector(state => state.app.remoteConfig);

  const serialItem = remoteConfig.home_banners.find(
    item => item.id === serialId,
  );

  const handleOnExit = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate(ScreenNames.Home);
    }
  };

  if (
    !serialItem ||
    (Array.isArray(serialItem.episodes) && serialItem.episodes.length === 0)
  ) {
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
  } else {
    const episodes = serialItem.episodes;

    return (
      <WatchingContent
        serialId={serialId}
        episodes={episodes}
        time={time}
        episodeId={episodeId}
        onExit={handleOnExit}
      />
    );
  }
};

const WatchingContent = ({
  serialId,
  episodes,
  episodeId,
  time,
  onExit,
}: {
  serialId: string;
  episodes: EpisodeType[];
  episodeId?: string;
  time?: number;
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
  }, [episodeId, episodes]);

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

  const handleOnEndReached = () => {};

  const handleOnFirstItemLoaded = (ref: RefObject<VideoRef>) => {
    setIsLoaded(true);
    if (ref.current && time) {
      const timeToSeek = time <= 5 ? time : time - 3;
      ref.current.seek(timeToSeek, 0);
    }
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
            serialId={serialId}
            activeItemId={activeItemId}
            prevItemId={prevItemId}
            onFirstItemLoaded={ref => handleOnFirstItemLoaded(ref)}
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
