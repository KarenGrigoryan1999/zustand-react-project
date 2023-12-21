import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import ListContainer from '../../../components/ListContainer';


export default function AboutScreen() {
  return(
    <View style={styles.container}>
      <ListContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  }
})