import React from 'react';
import {Text} from 'react-native';
import styles from './SectionTitleStyles';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
  return <Text style={styles.title}> {title} </Text>;
};

export default SectionTitle;
