import React, {useState, useRef, useCallback, useMemo} from 'react';
import {Text, FlatList, View} from 'react-native';
import Button from './Button';
import styles from '../styles';

/**
 * Script:
 * 1. Explain code
 * 2. Show it renders the child each time
 * 4. Add useCallback -> only updates when the parent updates
 * 6. Add element to the list
 * 7. add useMemo to flatListData
 */

const data = new Array(10).fill('child');

export default function () {
  const [count, setCount] = useState(1);

  const updateCount = () => {
    setCount(count + 1);
  };

  const extractKey = (v, i) => i;
  const renderItem = ({item}) => <ChildComponent name={item} />;
  // step 6: const flatListData = ['top child', ...data];

  return (
    <>
      <Text style={styles.text}>{`parent is rendered ${count} times`}</Text>
      <Button onPress={updateCount} title="Update count" />
      <View style={styles.flatList}>
        <FlatList
          renderItem={renderItem}
          data={data}
          keyExtractor={extractKey}
        />
      </View>
    </>
  );
}

const ChildComponent = ({name}) => {
  const count = useRef(0);
  count.current++;
  return (
    <Text
      style={styles.text}>{`${name} is rendered ${count.current} times`}</Text>
  );
};
