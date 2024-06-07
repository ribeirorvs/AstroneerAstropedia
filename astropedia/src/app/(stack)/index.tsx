import React, { useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { images } from '@/assets/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate } from '@/libs/localization';
import { Link, router } from "expo-router";
import { layoutStyle } from '@/styles/layoutStyles';
import { imgStyle } from '@/styles/imgStyles';
import { textStyle } from '@/styles/textStyles';

export default function index() {

    //Deine the icon of the header checking the stored option
    useEffect(() => {
        const key = '@astropedia:astroSuit';
        async function defineSuit(){
            const data = await AsyncStorage.getItem(key);
            const suit = data ? (data as string) : 'classicSuit';
            await AsyncStorage.setItem(key, suit);
        }
        defineSuit();
    }, [])

    //Define the name in header, checking the stored option
    //Not in use yet
    useEffect(() => {
        const key = '@astropedia:astroName'
        async function defineAstroName() {
            await AsyncStorage.setItem(key, 'Astroneer');
        }
        defineAstroName()
    }, [])

    //Define if the welcome page will be showed or no.
    useEffect(() => {
        const key = '@stropedia:flow';
        async function defineAppFlow() {
            const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem(key)));
            const flow = data ? (data as string) : {};
            if (flow !== 'planets') {
                await AsyncStorage.setItem(key, 'planets')
            } else {
                router.replace("/(drawer)/planets")
            }
        }
        defineAppFlow();
    }, [])
    return (
        <SafeAreaView style={layoutStyle.container}>
            <View style={layoutStyle.wrapper}>
                <Image
                    source={images.welcome} style={imgStyle.welcomeImage}
                    resizeMode='contain'
                />
                <Text style={textStyle.welcomeMessage}>
                    {translate('welcome')}
                </Text>
                <Link replace href="planets" asChild>
                    <TouchableOpacity
                        activeOpacity={0.75}
                    >
                        <Image source={images.f} style={imgStyle.button} />
                    </TouchableOpacity>
                </Link>
            </View>
        </SafeAreaView>
    )

}