import {Dimensions} from 'react-native';

const {
  width,
  height,
  // scale, fontScale
} = Dimensions.get('screen');

const metrics = {
  ...Dimensions.get('window'),
  screenHeight: height,
  screenWidth: width,
  //   scale,
  //   fontScale,
};

export default metrics;
