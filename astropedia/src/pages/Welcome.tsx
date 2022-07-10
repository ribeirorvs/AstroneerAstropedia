import React, { useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { images } from '../assets/index';
import { textStyle } from '../styles/textStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { imgStyle } from '../styles/imgStyles';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate } from '../libs/localization';

export function Welcome() {
    const navigation = useNavigation();

    useEffect(() => {
        const key = '@astropedia:astroSuit';
        async function defineSuit(){
            const data = await AsyncStorage.getItem(key);
            const suit = data ? (data as string) : 'classicSuit';
            await AsyncStorage.setItem(key, suit);
        }
        defineSuit();
    }, [])

    useEffect(() => {
        const key = '@astropedia:lang';
        async function defineLanguage() {
            const data = await AsyncStorage.getItem(key);
            const language = data ? (data as string) : 'en';
            await AsyncStorage.setItem(key, language);
        }
        defineLanguage();
    }, [])

    useEffect(() => {
        const key = '@stropedia:flow';
        async function defineAppFlow() {
            const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem(key)));
            const flow = data ? (data as string) : {};
            if (flow != 'Home') {
                await AsyncStorage.setItem(key, 'Home')
            } else {
                navigation.navigate(flow)
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
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={() => navigation.navigate('UserIdentification')}
                >
                    <Image source={images.f} style={imgStyle.button} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}