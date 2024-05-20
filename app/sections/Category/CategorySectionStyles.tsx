import {colors, fonts} from '@/theme';
import metrics from '@/utils/metrics';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: metrics.appPaddingVertical,
  },
  carouselContainer: {
    flex: 1,
  },
  carouselItemContainer: {
    height: '100%',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    gap: 6,
    marginLeft: metrics.appPaddingHorizontal,
  },
  image: {
    width: '100%',
    borderRadius: 10,
  },
  upcomingTitle: {
    color: colors.accentRead,
    fontFamily: fonts.NunitoSansExtraBold,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  bookTitle: {
    color: '#EBEDF0',
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 14,
  },
  skeletonContainer: {
    width: '100%',
    backgroundColor: colors.skeletonDark,
    zIndex: 12,
    borderRadius: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 10,
    width: '100%',
    height: '100%',
    zIndex: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurImage: {
    width: '100%',
    height: '100%',
  },
  blurImageContent: {
    position: 'absolute',
    zIndex: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    width: 45,
    height: 45,
    overflow: 'hidden',
  },
  blurLockImage: {
    position: 'absolute',
    width: 45,
    height: 45,
  },
});

export default styles;
