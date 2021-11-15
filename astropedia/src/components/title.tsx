import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import colors from '../styles/colors';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';
import player from '../img/player.png';
import { imgStyle } from '../styles/imgStyles';

export function Title() {
    return (
        <Text style={textStyle.title}>
            Astropedia
        </Text>
    )
}