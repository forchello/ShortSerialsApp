import {colors, fonts} from '@/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerTitle: {
    color: colors.gray020,
    fontFamily: fonts.NunitoSansBold,
    fontSize: 24,
  },
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
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
    // backgroundColor: 'yellow',
  },
});

export default styles;
