import { Button, View } from 'react-native';

import { login } from '@react-native-seoul/kakao-login';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';


export default function App() {
  const signInutation = useMutation({
    mutationFn: (data: { accessToken: string }) => {
      return axios({
        method: 'POST',
        url: 'http://10.0.2.2:3000/auth/signin',
        data,
      });
    },
    onError: (e) => console.log('error: ', e)
  });

  return (
    <View>
      <Button
        onPress={async () => {
          const { accessToken: kakaoAccessToken } = await login();
          const { data } = await signInutation.mutateAsync({ accessToken: kakaoAccessToken });
          const { accessToken, refreshToken } = data;
          console.log({ accessToken, refreshToken });
        }}
        title="Kakao login"
      />
    </View>
  );
}
