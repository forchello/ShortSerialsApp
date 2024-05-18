import {FeedVideoType} from '@/types/feedVideos';
import metrics from '@/utils/metrics';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import styles from './FeedVideoStyles';
import {images} from '@/theme';

import PlayIcon from '@/assets/svg/play.svg';
import PauseIcon from '@/assets/svg/pause.svg';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import formatTime from '@/utils/formatTime';
import {useIsFocused} from '@react-navigation/native';

interface FeedVideoProps {
  item: FeedVideoType;
  activeItemId: string;
  prevItemId: string;
  onFirstItemLoaded: () => void;
}

const HIDE_UI_TIME = 5000;

const FeedVideo: React.FC<FeedVideoProps> = ({
  item,
  activeItemId,
  prevItemId,
  onFirstItemLoaded,
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const [isUIHidden, setIsUIHidden] = useState<boolean>(true);

  const [lastTimePressed, setLastTimePressed] = useState<string>(
    new Date().toISOString(),
  );

  const [volume, setVolume] = useState<number>(0);
  const [rate, setRate] = useState<number>(1);

  const videoRef = useRef<VideoRef>(null);

  const isFocused = useIsFocused();

  const handleHideUI = (hide: boolean) => {
    setIsUIHidden(hide);
  };

  useEffect(() => {
    if (videoRef.current && isLoaded) {
      if (item.id === activeItemId) {
        setIsPaused(false);
        setVolume(0.4);

        setTimeout(() => {
          handleHideUI(false);
        }, 250);
      } else if (item.id === prevItemId) {
        setVolume(0);
        handleHideUI(true);
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.seek(0, 0);
          }
        }, 250);
      }
    }
  }, [activeItemId, prevItemId, item, isLoaded]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleHideUI(true);
    }, HIDE_UI_TIME);

    return () => {
      clearTimeout(timeout);
    };
  }, [lastTimePressed]);

  const handleOnLoad = () => {
    setIsLoaded(true);
    setLastTimePressed(new Date().toISOString());
    if (activeItemId === item.id) {
      onFirstItemLoaded();
    }
  };

  const handleOnProgress = (event: {
    currentTime: number;
    seekableDuration: number;
  }) => {
    setDuration(event.seekableDuration);
    setCurrentTime(event.currentTime);
  };

  const handleOnPress = useCallback(() => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.resume();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  }, [isPaused]);

  const handleOnPressIn = useCallback(() => {
    handleHideUI(true);
    if (!isPaused) {
      setRate(2);
    }
  }, [isPaused]);

  const handleOnPressOut = () => {
    handleHideUI(false);
    setLastTimePressed(new Date().toISOString());
    setRate(1);
  };

  return (
    <>
      {isLoaded && (
        <Animated.Image
          source={images.gradient}
          style={styles.headerGradient}
          entering={FadeIn.delay(200).duration(200)}
          exiting={FadeOut.delay(200).duration(200)}
        />
      )}
      <View style={styles.footerContainer}>
        {(!isUIHidden || rate !== 1) && (
          <Animated.Image
            source={images.gradient}
            style={styles.footerGradient}
            entering={FadeIn.delay(200).duration(200)}
            exiting={FadeOut.delay(200).duration(200)}
          />
        )}

        {!isUIHidden && (
          <Animated.View
            style={styles.controlsContainer}
            entering={FadeIn.delay(200).duration(200)}
            exiting={FadeOut.delay(200).duration(200)}>
            <TouchableOpacity onPress={handleOnPress} activeOpacity={0.7}>
              <View style={styles.pauseButton}>
                {isPaused ? <PlayIcon /> : <PauseIcon />}
              </View>
            </TouchableOpacity>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.activeProgressBar,
                    {width: `${(currentTime / duration) * 100}%`},
                  ]}>
                  <View style={styles.progressBarPointer} />
                </View>
              </View>
              <View style={styles.progressBarTimeContainer}>
                <Text style={styles.progressBarTimeText}>
                  {formatTime(Math.round(currentTime))}
                </Text>
                <Text style={styles.progressBarTimeText}>
                  {formatTime(Math.round(duration))}
                </Text>
              </View>
            </View>
          </Animated.View>
        )}

        {rate !== 1 && (
          <Animated.View
            style={styles.controlsContainer}
            entering={FadeIn.delay(200).duration(200)}
            exiting={FadeOut.delay(200).duration(200)}>
            <Text style={styles.speedX2Text}> Speed: {rate}x </Text>
          </Animated.View>
        )}
      </View>

      {!isLoaded && (
        <View style={styles.videoSkeleton}>
          <ActivityIndicator size="large" />
        </View>
      )}

      <Pressable onPressOut={handleOnPressOut} onLongPress={handleOnPressIn}>
        <Video
          ref={videoRef}
          source={{
            uri: item.uri,
          }}
          style={{
            height: metrics.screenHeight,
            width: metrics.screenWidth,
          }}
          paused={
            activeItemId !== item.id ||
            (activeItemId === item.id && isPaused) ||
            !isFocused
          }
          volume={volume}
          rate={rate}
          repeat
          playInBackground={false}
          allowsExternalPlayback={false}
          onLoad={handleOnLoad}
          onProgress={handleOnProgress}
        />
      </Pressable>
    </>
  );
};

export default FeedVideo;
