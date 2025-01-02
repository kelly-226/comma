import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { View, Text } from 'react-native';

import { useAuthStore } from '@/stores/auth';

import Login from './login';

export default function App() {
  const queryClient = new QueryClient();
  const { getToken } = useAuthStore();
  const token = getToken();

  return (
    <QueryClientProvider client={queryClient}>
      {
        !token
        ? <Login />
        : (
          <View>
            <Text>Home</Text>
          </View>
        )
      }
    </QueryClientProvider>
  );
}
