import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import iconSylva from '../img/iconSylva.png';
import f from '../img/f.png';
import { textStyle } from '../styles/textStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { imgStyle } from '../styles/imgStyles';
import { useNavigation } from '@react-navigation/core';


export function Welcome() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={layoutStyle.container}>
            <View style={layoutStyle.wrapper}>
                <Image
                    source={iconSylva} style={imgStyle.welcomeImage}
                    resizeMode='contain'
                />
                <Text style={textStyle.welcomeMessage}>
                    THE EASIER WAY{'\n'}
                    TO USE{'\n'}
                    THE ASTROPEDIA
                </Text>
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={() => navigation.navigate('UserIdentification')}
                >
                    <Image source={f} style={imgStyle.button} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}