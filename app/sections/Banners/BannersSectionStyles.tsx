import {colors, fonts} from '@/theme';
import metrics from '@/utils/metrics';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: metrics.appPaddingVertical,
    flex: 1,
  },
  carouselItemContainer: {
    flex: 1,
    backgroundColor: colors.skeletonDark,
    borderRadius: 12,
    overflow: 'hidden',
    marginLeft: metrics.appPaddingHorizontal,
  },
  skeletonContainer: {
    zIndex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.skeletonDark,
  },
  gradient: {
    position: 'absolute',
    zIndex: 1,
    opacity: 0.7,
    bottom: 0,
    height: '50%',
    width: '100%',
    transform: [{rotateZ: '180deg'}],
  },
  itemContentContainer: {
    height: '100%',
    width: '100%',
    zIndex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  contentTextContainer: {
    gap: 0,
    paddingBottom: 10,
  },
  contentTitle: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: 28,
    color: '#F2F3F5',
  },
  contentDescription: {
    fontFamily: fonts.NunitoSansRegular,
    fontSize: 16,
    color: '#C4C8CC',
  },
});

export default styles;
