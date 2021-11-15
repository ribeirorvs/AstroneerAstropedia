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
import player from '../img/player.png';
import { imgStyle } from '../styles/imgStyles';

export function Header() {
    return (

        <TouchableOpacity
            activeOpacity={0.75}
        >
            <View style={layoutStyle.header}>
                <Image source={player} style={imgStyle.player} />
                <View>
                    <Text style={textStyle.text}>Astroneer</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}