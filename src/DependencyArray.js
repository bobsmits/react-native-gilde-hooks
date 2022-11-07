import React, {useState, useRef, useCallback} from 'react';
import {Text, FlatList, View, TextInput} from 'react-native';
import Button from './Button';
import styles from '../styles';

/**
 * Script:
 * 1. Explain code
 * 2. should update the time every 500ms second right? -> nope
 * 3. example of an function in the useRef value
 * 4. example of calling setCount with an function
 */

export default function () {
  const [count, setCount] = useState(0);
  
  

  return (
    <>
      <Text style={styles.text}>{`count: ${count}`}</Text>
      <Button onPress={stop} title="Stop" />
      <Button onPress={start} title="Start" />
    </>
  );
}
