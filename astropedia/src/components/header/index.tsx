import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { images } from '@/assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';
import { headerStyle } from './style';
import { MenuButton } from '../menuButton';


export function Header() {

    const [astroName, setAstroName] = useState<string>('Astroneer');
    const [astroSuit, setAstroSuit] = useState<string>(images.classicSuit);

    //Check the stored name
    useEffect(() => {
        async function loadAstroName() {
            const userName = await AsyncStorage.getItem('@astropedia:astroName');
            setAstroName(userName || astroName);
        }

        loadAstroName();
    })

    //Check the stored suit icon
    useEffect(() => {
        async function loadAstroSuit() {
            const suit = await AsyncStorage.getItem('@astropedia:astroSuit');
            setAstroSuit(suit || astroSuit);
        }
        loadAstroSuit();
    })

    return (
        <View  style={headerStyle.header}>
            <MenuButton />
            <Link href="planets" asChild >
                <TouchableOpacity
                    activeOpacity={0.70}
                >
                    <View style={headerStyle.headerHome}>
                        <Image source={images[astroSuit]} style={headerStyle.player} />
                        <View>
                            <Text style={headerStyle.text}>{astroName}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Link>
        </View>
    )
}