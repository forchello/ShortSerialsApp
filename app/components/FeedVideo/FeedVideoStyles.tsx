import {colors, fonts} from '@/theme';
import metrics from '@/utils/metrics';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  headerGradient: {
    width: metrics.screenWidth,
    height: '20%',
    opacity: 0.5,
    top: 0,
    position: 'absolute',
    zIndex: 10,
  },
  footerGradient: {
    width: metrics.screenWidth,
    opacity: 0.5,
    height: '20%',
    bottom: 0,
    position: 'absolute',
    transform: [{rotateZ: '180deg'}],
    zIndex: 10,
  },
  videoSkeleton: {
    backgroundColor: 'red',
    opacity: 0.5,
    height: metrics.screenHeight,
    width: metrics.screenWidth,
    position: 'absolute',
    zIndex: 100,
  },
});

export default styles;
