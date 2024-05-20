import {colors, fonts} from '@/theme';
import metrics from '@/utils/metrics';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: 22,
    color: colors.white,
    paddingTop: metrics.appPaddingVertical / 2,
    paddingBottom: metrics.appPaddingVertical + metrics.appPaddingVertical / 2,
    paddingLeft: metrics.appPaddingHorizontal,
  },
});

export default styles;
