import { StyleSheet } from 'react-native';
import colors from './colors';
import fonts from './fonts';
import Fonts from './fonts'

export const textStyle = StyleSheet.create({
    welcomeMessage: {
        color: colors.gold,
        fontSize: 40,
        textAlign: 'center',
        fontFamily: Fonts.heading
    },
    text: {
        color: colors.white,
        fontFamily: Fonts.text,
        fontSize: 18
    },
});