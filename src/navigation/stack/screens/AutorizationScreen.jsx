import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, ScrollView, Button } from 'react-native';

import MainTitle from '../../../components/MainTitle';
import Input from '../../../components/Input';
import CustomButton from '../../../components/CustomButton';
import useAuthStore from '../../../store/authStore';

export default function AutorizationScreen() {
    const setToken = useAuthStore((state) => state.setToken);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log('email', email);

    const handleLogin = async () => {
        console.log('handleLogin: ', email)
        const url = `${process.env.REACT_APP_LOGIN}/login`;
        try {
          const response = await fetch(url, {
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
            setToken(token)
          } else {
            console.error('Ошибка авторизации');
          }
        } catch (error) {
          console.error('Ошибка сети:', error);
        }
      };

  return (
    <View style={styles.container}>

        <View style={styles.inputsBlockWrapper}>
            <MainTitle style={styles.mainTitle} >Войти</MainTitle>

            <View style={styles.inputsBlock}>
                <View style={styles.inputWrapper}>
                    <Input placeholder="Email"  onChangeText={(text) => setEmail(text)}/>
                </View>
                <View style={styles.inputWrapper}>
                    <Input placeholder="Пароль" onChangeText={(text) => setPassword(text)} secureTextEntry/>
                </View>
                <View style={styles.inputWrapper}>
                    <CustomButton title='Войти' color={'#ffdd00'} textColor='#000' onPress={handleLogin} />
                </View>
                <View>
                    <Text style={{color: 'blue'}}
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
