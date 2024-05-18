import {FeedVideoType} from '@/types/feedVideos';
import metrics from '@/utils/metrics';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import styles from './FeedVideoStyles';
import {colors, images} from '@/theme';

import PlayIcon from '@/assets/svg/play.svg';
import PauseIcon from '@/assets/svg/pause.svg';
import Animated, {
  FadeIn,
  FadeOut,
  useSharedValue,
} from 'react-native-reanimated';
import formatTime from '@/utils/formatTime';
import {useIsFocused} from '@react-navigation/native';
import {Slider} from 'react-native-awesome-slider';

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

  const animatedMinDuration = useSharedValue(0);
  const animatedDuration = useSharedValue<number>(0);
  const animatedCurrentTime = useSharedValue<number>(0);

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

    animatedDuration.value = event.seekableDuration;
    animatedCurrentTime.value = event.currentTime;
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

  const handleOnSeek = (value: number) => {
    if (videoRef.current) {
      videoRef.current.seek(value);
    }
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
              <Slider
                minimumValue={animatedMinDuration}
                maximumValue={animatedDuration}
                progress={animatedCurrentTime}
                onValueChange={handleOnSeek}
                onSlidingStart={handleOnPressOut}
                renderBubble={() => null}
                thumbWidth={12}
                theme={{
                  disableMinTrackTintColor: colors.gray050,
                  maximumTrackTintColor: 'rgba(255,255,255,0.32)',
                  minimumTrackTintColor: colors.gray020,
                  cacheTrackTintColor: colors.gray050,
                }}
              />
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

      <Pressable
        onPressOut={handleOnPressOut}
        onLongPress={handleOnPressIn}
        onPress={handleOnPress}>
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
