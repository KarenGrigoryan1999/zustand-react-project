import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainTitle from '../../../components/MainTitle';
import Input from '../../../components/Input';
import CustomButton from '../../../components/CustomButton';
import useAuthStore from '../../../store/authStore';
import api from '../../../api';
import axios from 'axios';

export default function AutorizationScreen({navigation}) {
  const setToken = useAuthStore((state) => state.setToken);
  const setUserData = useAuthStore((state) => state.setUserData);
  const [email, setEmail] = useState('grigoryan_k99@inbox.ru');
  const [password, setPassword] = useState('11111111');

  const [pageLoading, setPageLoading] = useState(false);

  const handleLogin = async () => {
    setPageLoading(true);
    if (!email || !password) return alert('Вы не заполнили обязательные поля')
    const url = `https://skylake.mandarinshow.ru/api/`;
    try {
      const response = await fetch(`${url}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.access_token;

        await AsyncStorage.setItem('token', token);

        const res = await fetch(`${url}profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token,
          },
          body: null,
        });
        setToken(token);
        if(res.ok) {
          const data = await res.json();
          setUserData(data);
          navigation.navigate('Test');
        }
      } else {
        console.error('Ошибка авторизации');
      }
      setPageLoading(false);
    } catch (error) {
      setPageLoading(false);
      console.error('Ошибка сети:', error);
    }
  };

  if (pageLoading) {
    return <View style={{flex: 1, height: '100%', alignItems: 'center', justifyContent: 'center'}}><ActivityIndicator size={50} color={'black'} /></View>
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputsBlockWrapper}>
        <MainTitle style={styles.mainTitle} >Войти</MainTitle>

        <View style={styles.inputsBlock}>
          <View style={styles.inputWrapper}>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} />
          </View>
          <View style={styles.inputWrapper}>
            <Input placeholder="Пароль" onChangeText={(text) => setPassword(text)} value={password} secureTextEntry />
          </View>
          <View style={styles.inputWrapper}>
            <CustomButton title='Войти' color={'#ffdd00'} textColor='#000' onPress={handleLogin} />
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