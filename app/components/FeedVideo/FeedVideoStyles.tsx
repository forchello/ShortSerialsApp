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
    top: 0,
    position: 'absolute',
    zIndex: 10,
  },
  videoSkeleton: {
    height: metrics.screenHeight,
    width: metrics.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
  },
  footerContainer: {
    width: metrics.screenWidth,
    height: '15%',
    bottom: 0,
    position: 'absolute',
    zIndex: 10,
    justifyContent: 'center',
  },
  footerGradient: {
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    width: '100%',
    height: '100%',
    transform: [{rotateZ: '180deg'}],
  },
  controlsContainer: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  speedX2Text: {
    color: colors.gray020,
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 20,
  },
  pauseButton: {
    padding: 4,
  },
  progressBarContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    marginTop: 35,
    gap: 5,
  },
  progressBarTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressBarTimeText: {
    color: 'rgba(255,255,255,0.7)',
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 16,
  },
});

export default styles;
