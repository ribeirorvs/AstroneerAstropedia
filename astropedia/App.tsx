import React from 'react';
import { UserIdentification } from './src/pages/UserIdentification';
import {
  useFonts,
  Roboto_400Regular
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';

export default function app() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }

  return (
    < Routes />
  )
}