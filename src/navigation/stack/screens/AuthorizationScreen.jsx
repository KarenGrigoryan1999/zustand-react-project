import * as React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, ScrollView, Button } from 'react-native';

import MainTitle from '../../../components/MainTitle';
import AuthInput from '../../../components/AuthInput';
import CustomButton from '../../../components/CustomButton';

export default function AutorizationScreen() {

  return (
    <View style={styles.container}>

      <View style={styles.inputsBlockWrapper}>
        <MainTitle style={styles.mainTitle} >Войти</MainTitle>

        <View style={styles.inputsBlock}>
          <View style={styles.inputWrapper}>
            <AuthInput placeholder="Email" />
          </View>
          <View style={styles.inputWrapper}>
            <AuthInput placeholder="Пароль" />
          </View>
          <View style={styles.inputWrapper}>
            <CustomButton title='Войти' color={'#ffdd00'} textColor='#000' />
          </View>
          <View>
            <Text style={{ color: 'blue' }}
              onPress={() => Linking.openURL('http://google.com')}>
              Забыли пароль?
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontFamily: 'MontSerrat',
    fontWeight: '700',
    fontSize: 32,
  },
  inputsBlockWrapper: {
    height: 344,
    width: 319,
    display: 'flex',
    alignItems: 'center',
    rowGap: 45,
  },
  inputWrapper: {
    width: '100%',
  },
  button: {
    height: 50,
    borderRadius: 45,
    backgroundColor: '#ffdd00',
  },
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  inputsBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 272,
    width: 344,
  }
})