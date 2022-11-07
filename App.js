/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import UseCallBackMemo from './src/UseCallBackMemo';
import UseRefAndState from './src/UseRefAndState';
import UseEffect from './src/UseEffect';
import UseImperativeHandle from './src/UseImperativeHandle';
import styles from './styles';

export default () => (
  <View style={styles.background}>
    {/* <UseCallBackMemo /> */}
    {/* <UseRefAndState /> */}
    {/* <UseEffect /> */}
    <UseImperativeHandle />
  </View>
);
