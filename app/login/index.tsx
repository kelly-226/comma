import { login as kakaoLogin } from '@react-native-seoul/kakao-login';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { Button, View } from 'react-native';

import apiClient from '@/api/client';
import { useAuthStore } from '@/stores/auth';


const Login = () => {
  const { setToken } = useAuthStore();
  const login = async () => {
    const { accessToken } = await kakaoLogin();
    apiClient({
      url: '/auth/login', 
      data: { accessToken },
    })
  }
  const loginMutation = useMutation({
    mutationFn: login, 
    onSuccess: (data) => {
      console.log(data);
      // setToken(data.accessToken);
    }
  });
  return (
    <View>
      <Button
        onPress={() => loginMutation.mutateAsync()}
        title="Kakao login"
      />
    </View>
  );
};

export default Login;