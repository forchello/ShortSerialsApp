import React from 'react';
import {View, StyleSheet, StyleProp} from 'react-native';
import FastImage, {FastImageProps, ImageStyle} from 'react-native-fast-image';

interface FastImageBackgroundProps extends FastImageProps {
  children?: React.ReactNode;
  style?: StyleProp<ImageStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const FastImageBackground: React.FC<FastImageBackgroundProps> = ({
  children,
  style = {},
  imageStyle,
  ...props
}) => {
  return (
    <View style={style}>
      <FastImage
        {...props}
        style={[
          StyleSheet.absoluteFill,
          {
            width: '100%',
            height: '100%',
          },
          imageStyle,
        ]}
      />
      {children}
    </View>
  );
};

export default FastImageBackground;
