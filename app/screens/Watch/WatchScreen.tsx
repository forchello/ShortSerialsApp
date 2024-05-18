import React, {useMemo, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './WatchScreenStyles';
import {WatchScreenProps} from '@/types/navigations';
import FeedVideo from '@/components/FeedVideo/FeedVideo';
import {FeedVideoType} from '@/types/feedVideos';
import CloseIcon from '@/assets/svg/close.svg';

const data: FeedVideoType[] = [
  {
    id: '1',
    name: 'Episode 1',
    uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/convertedwife.m3u8',
  },
  {
    id: '2',
    name: 'Episode 2',
    uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/2wife2.m3u8',
  },
  {
    id: '3',
    name: 'Episode 3',
    uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/3wife3.m3u8',
  },
  {
    id: '4',
    name: 'Episode 4',
    uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/4wife4.m3u8',
  },
  {
    id: '5',
    name: 'Episode 5',
    uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/5wife5.m3u8',
  },
  {
    id: '6',
    name: 'Episode 6',
    uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/6wife6.m3u8',
  },
  {
    id: '7',
    name: 'Episode 7',
    uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/7wife7.m3u8',
  },
  {
    id: '8',
    name: 'Episode 8',
    uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/8wife8.m3u8',
  },
];

const WatchScreen: React.FC<WatchScreenProps> = ({route, navigation}) => {
  const {videoId} = route.params;

  const [activeItemId, setActiveItemId] = useState<string>(data[0].id);

  const currentItem = useMemo(() => {
    return data.find(item => item.id === activeItemId);
  }, [activeItemId]);

  const handleHome = () => {
    navigation.navigate('Home');
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {itemVisiblePercentThreshold: 50},
      onViewableItemsChanged: ({changed, viewableItems}) => {
        if (viewableItems.length > 0 && viewableItems[0].isViewable) {
          setActiveItemId(viewableItems[0].item.id);
        }
      },
    },
  ]);

  const handleOnEndReached = () => {
    console.log('onEndReached');
  };

  const handleOnExit = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerCloseIcon}>
          <TouchableOpacity onPress={handleOnExit}>
            <CloseIcon />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}> {currentItem?.name} </Text>
      </View>

      <FlatList
        data={data}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <FeedVideo item={item} activeItemId={activeItemId} />
        )}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={3}
      />
    </View>
  );
};

export default WatchScreen;
