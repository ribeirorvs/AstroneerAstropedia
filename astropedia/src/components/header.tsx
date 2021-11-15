import React from 'react';
import {
    SafeAreaView,
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


export function Header() {
    const navigation = useNavigation();
    return (

        <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => navigation.navigate('Home')}
        >
            <View style={layoutStyle.header}>
                <Image source={images.player} style={imgStyle.player} />
                <View>
                    <Text style={textStyle.text}>Astroneer</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}