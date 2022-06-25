import React from 'react';
import {
  useFonts,
  Roboto_400Regular
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import { handleLocale } from './src/libs/localization';

export default function app() {
  handleLocale()

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