import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';
import { imgStyle } from '../styles/imgStyles';
import { images } from '../assets';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Header() {
    const navigation = useNavigation();
    const [astroName, setAstroName] = useState<string>();
    const [astroSuit, setAstroSuit] = useState<string>(images.classicSuit);

    useEffect(() => {
        async function loadAstroName() {
            const userName = await AsyncStorage.getItem('@astropedia:astroName');
            setAstroName(userName || 'Astroneer');
        }

        loadAstroName();
    })

    useEffect(() => {
        async function loadAstroSuit() {
            const suit = await AsyncStorage.getItem('@astropedia:astroSuit');
            setAstroSuit(suit || astroSuit);
        }
        loadAstroSuit();
    })

    return (
        <View  style={layoutStyle.header}>
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => navigation.navigate('Home')}
        >
            <View style={layoutStyle.headerHome}>
                <Image source={images[astroSuit]} style={imgStyle.player} />
                <View>
                    <Text style={textStyle.text}>{astroName}</Text>
                </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => navigation.navigate('Configuration')}
        >
            <Image source={images.config} />
        </TouchableOpacity>
        </View>
    )
}