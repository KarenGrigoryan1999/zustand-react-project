import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MainTitle from '../../components/MainTitle';


export default function ExtraScreen({navigation, route: {params}}) {
  const {name, fullInfo} = params;

  return(
    <View style={styles.container}>
      <MainTitle>{name}</MainTitle>
      <Text>{fullInfo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  }
})