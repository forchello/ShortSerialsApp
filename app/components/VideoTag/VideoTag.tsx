import React from 'react';
import {ColorValue, Text, View} from 'react-native';
import styles from './VideoTagStyles';

interface VideoTagProps {
  text: string;
  containerColor?: ColorValue;
  textColor?: ColorValue;
}

const VideoTag: React.FC<VideoTagProps> = ({
  text,
  containerColor,
  textColor,
}) => {
  return (
    <View
      style={[
        styles.container,
        containerColor ? {backgroundColor: containerColor} : {},
      ]}>
      <Text style={[styles.text, textColor ? {color: textColor} : {}]}>
        {text}
      </Text>
    </View>
  );
};

export default VideoTag;
