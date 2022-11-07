import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import {Text} from 'react-native';
import Button from './Button';
import styles from '../styles';

/**
 * Script:
 * 1. Start with "stopwatch from UseRefAndState example"
 * 2. Add imperativeHandle and reset function, don't forget forwardRef
 */

export default () => {
  // step 2:
  // const stopWatch = useRef();

  // const reset = () => {
  //   stopWatch.current.reset();
  // };

  return (
    <>
      <StopWatch />
      {/* Step 2: */}
      {/* <Button onPress={reset} title="Reset" /> */}
    </>
  );
};

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const interval = useRef();

  // step 2:
  // useImperativeHandle(
  //   ref,
  //   () => ({
  //     reset: () => {
  //       setCount(0);
  //     },
  //   }),
  //   [],
  // );

  const start = () => {
    if (interval.current) return;
    setCount(0);
    interval.current = setInterval(() => setCount(_count => _count + 1), 100);
  };

  const stop = () => {
    clearInterval(interval.current);
    interval.current = null;
  };

  useEffect(() => {
    return () => clearInterval(interval.current);
  }, []);

  return (
    <>
      <Text style={styles.text}>{`count: ${count}`}</Text>
      <Button onPress={stop} title="Stop" />
      <Button onPress={start} title="Start" />
    </>
  );
};
