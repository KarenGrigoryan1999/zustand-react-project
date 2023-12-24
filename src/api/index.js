import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const service = axios.create({
  timeout: 20000 // request timeout
});

// request interceptor

service.interceptors.request.use(
  async config => {
    // Do something before request is sent
    const token = await AsyncStorage.getItem('token');

    config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export default service;