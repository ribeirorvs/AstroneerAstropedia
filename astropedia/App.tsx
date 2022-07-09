import React, { 
          useEffect, 
          useState, 
          useCallback 
} from 'react';
import {
  useFonts,
  Roboto_400Regular
} from '@expo-google-fonts/roboto';
import { handleLocale } from './src/libs/localization';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes';

export default function app() {

  const [appIsReady, setAppIsReady] = useState(false);
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