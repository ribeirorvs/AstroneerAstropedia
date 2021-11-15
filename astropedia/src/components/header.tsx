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
import { images } from '../img';

export function Header() {
    return (

        <TouchableOpacity
            activeOpacity={0.75}
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