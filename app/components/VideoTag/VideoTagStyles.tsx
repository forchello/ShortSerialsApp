import {colors, fonts} from '@/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  text: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: 12,
    color: '#F5F5F5',
    textTransform: 'uppercase',
  },
});

export default styles;
