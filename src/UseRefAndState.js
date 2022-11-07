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
  const interval = useRef(0);

  // Added step 3:
  // const updateInterVal = useRef();
  // updateInterVal.current = () => {
  //   setCount(count + 1);
  // };

  const start = () => {
    if (interval.current) return;
    setCount(0);
    interval.current = setInterval(() => setCount(count + 1), 500);
    // step 3. interval.current = setInterval(() => updateInterVal.current(), 500);
    // step 4. interval.current = setInterval((_count) => _count + 1);
  };

  const stop = () => {
    clearInterval(interval.current);
    interval.current = null;
  };

  return (
    <>
      <Text style={styles.text}>{`count: ${count}`}</Text>
      <Button onPress={stop} title="Stop" />
      <Button onPress={start} title="Start" />
    </>
  );
}
