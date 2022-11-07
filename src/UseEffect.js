import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Button from './Button';
import styles from '../styles';

/**
 * Script:
 * 1. Explain code: load async data when the button is pressed
 * 2. Should trigger and error when unmounted before completion
 * 3. add unMounted let
 */

export default () => {
  const [toggle, setToggle] = useState(0);

  return (
    <>
      {toggle ? <ComponentWithAsyncUseEffect /> : null}
      <Button onPress={() => setToggle(!toggle)} title="Toggle api results" />
    </>
  );
};

const ComponentWithAsyncUseEffect = () => {
  const [data, setData] = useState('Loading');

  useEffect(() => {
    // step 2: let unMounted;

    const loadData = async () => {
      const result = await apiCall();
      setData(result); // This should trigger an error.. but is does not :(
    };

    loadData();

    // step 2: return () => {unMounted = true};
  }, []);

  return <Text style={styles.text}>{data}</Text>;
};

async function apiCall() {
  await timeout(3000);
  return 'Data loaded';
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
