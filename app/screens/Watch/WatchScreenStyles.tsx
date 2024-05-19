import {colors, fonts} from '@/theme';
import metrics from '@/utils/metrics';
import {StyleSheet} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  headerTitle: {
    color: colors.gray020,
    fontFamily: fonts.NunitoSansBold,
    fontSize: 24,
  },
  headerContainer: {
    position: 'absolute',
    zIndex: 100,
    top: initialWindowMetrics ? initialWindowMetrics?.insets.top : 30,
    paddingHorizontal: metrics.appPaddingHorizontal,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCloseIcon: {
    left: 20,
    position: 'absolute',
    padding: 5,
  },
});

export default styles;
