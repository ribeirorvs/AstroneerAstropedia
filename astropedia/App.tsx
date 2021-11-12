import React from 'react';
import { Welcome } from './src/pages/Welcome';
import {
  useFonts,
  Roboto_400Regular
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

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
    < Welcome />
  );
}