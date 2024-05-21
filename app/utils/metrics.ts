import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const metrics = {
  ...Dimensions.get('window'),
  screenHeight: height,
  screenWidth: width,
  appPaddingHorizontal: 20,
  appPaddingVertical: 15,
};

export default metrics;
