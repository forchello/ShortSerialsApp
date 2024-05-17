import {fonts} from '@/theme';
import {StyleSheet, Text} from 'react-native';

const Test = () => {
  return <Text style={styles.text}>Tranding Now</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: fonts.NunitoSansRegular,
    fontSize: 52,
    padding: 70,
  },
});

export default Test;
