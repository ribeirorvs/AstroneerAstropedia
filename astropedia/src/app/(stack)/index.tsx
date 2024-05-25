import React, { 
    useEffect, 
} from 'react';
import {
    useFonts,
    Roboto_400Regular
} from '@expo-google-fonts/roboto';
import { handleLocale } from '@/libs/localization';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";

export default function index() {

    //Define the language of the app, checking the saved option
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
            <>
                {router.replace("welcome")  }
            </>
        )
    }
}