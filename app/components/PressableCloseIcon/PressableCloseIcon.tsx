import React from 'react';

import CloseIcon from '@/assets/svg/close.svg';
import {TouchableOpacity, View, ViewStyle} from 'react-native';

interface PressableCloseIconProps {
  onPress: () => void;
  containerStyles: ViewStyle;
}

const PressableCloseIcon: React.FC<PressableCloseIconProps> = ({
  onPress,
  containerStyles,
}) => {
  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onPress}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

export default PressableCloseIcon;
