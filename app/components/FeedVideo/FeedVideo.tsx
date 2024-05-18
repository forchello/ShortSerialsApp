import {FeedVideoType} from '@/types/feedVideos';
import metrics from '@/utils/metrics';
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import Video from 'react-native-video';
import styles from './FeedVideoStyles';
import {images} from '@/theme';

interface FeedVideoProps {
  item: FeedVideoType;
  activeItemId: string;
}

const FeedVideo: React.FC<FeedVideoProps> = ({item, activeItemId}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <Image source={images.gradient} style={styles.headerGradient} />
      <Image source={images.gradient} style={styles.footerGradient} />
      {!isLoaded && <View style={styles.videoSkeleton}></View>}
      <Video
        paused={activeItemId !== item.id}
        key={item.id}
        source={{
          uri: item.uri,
        }}
        style={{
          height: metrics.screenHeight,
          width: metrics.screenWidth,
        }}
        onLoad={handleOnLoad}
        controls
        muted
        repeat
        // playInBackground={false}
        allowsExternalPlayback={false}
      />
    </>
  );
};

export default FeedVideo;
