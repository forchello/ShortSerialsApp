import {colors, fonts} from '@/theme';
import metrics from '@/utils/metrics';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: metrics.appPaddingVertical,
    paddingHorizontal: metrics.appPaddingHorizontal,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: colors.accent,
    height: 80,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    gap: 10,
  },
  contentContainer: {
    alignItems: 'center',
    flex: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentTextContainer: {
    flexDirection: 'column',
  },
  contentTitle: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: 20,
    color: '#EBEDF0',
  },
  contentDescription: {
    fontFamily: fonts.NunitoSansRegular,
    fontSize: 14,
    paddingLeft: 6,
    color: '#E1E3E6',
  },
  arrowIcon: {
    marginRight: 10,
  },
  image: {
    flex: 1,
    height: 68,
    maxWidth: (68 * 4) / 5,
    borderRadius: 10,
    backgroundColor: 'red',
  },
});

export default styles;
