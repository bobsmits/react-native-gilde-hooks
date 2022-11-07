import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../styles';

export default ({onPress, title}) => (
  <TouchableOpacity
    activeOpacity={0.92}
    style={styles.button}
    onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);
