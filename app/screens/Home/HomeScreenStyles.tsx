import {colors, fonts} from '@/theme';
import metrics from '@/utils/metrics';
import {StyleSheet} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom: initialWindowMetrics
      ? initialWindowMetrics?.insets.bottom + metrics.appPaddingVertical
      : metrics.appPaddingVertical,
  },
  headerTitle: {
    color: colors.gray020,
    fontFamily: fonts.NunitoSansBold,
    fontSize: 24,
  },
  headerContainer: {
    marginTop: initialWindowMetrics ? initialWindowMetrics?.insets.top : 30,
    paddingHorizontal: metrics.appPaddingHorizontal,
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.background,
  },
  headerSearchIconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
