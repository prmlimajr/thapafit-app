import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold
} from '@expo-google-fonts/roboto-slab';
import theme from './global/styles/theme';

import { AuthProvider, useAuth } from './hooks/auth';

import { Routes } from './routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold
  });

  const { userStorageLoading } = useAuth();

  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}