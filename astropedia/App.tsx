import React, { 
          useEffect, 
          useState
} from 'react';
import {
  useFonts,
  Roboto_400Regular
} from '@expo-google-fonts/roboto';
import { handleLocale } from './src/libs/localization';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from './src/routes';

export default function app() {

  useEffect(() => {
    const key = '@astropedia:lang';
    async function defineLanguage() {
        const data = await AsyncStorage.getItem(key);
        const language = data ? (data as string) : 'en';
        await AsyncStorage.setItem(key, language);
    }
    defineLanguage();
}, [])
  const [fontsLoaded] = useFonts({
    Roboto_400Regular
  });

  handleLocale()

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync()
    return null
  } else {
    SplashScreen.hideAsync()
    return (
      < Routes />
    )
  }
}