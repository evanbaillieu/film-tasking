import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import Main from './src';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'


const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
    </QueryClientProvider>
    
  );
}