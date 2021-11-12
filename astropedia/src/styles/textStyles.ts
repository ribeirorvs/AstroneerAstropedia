import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';
import Fonts from './fonts'

export const textStyle = StyleSheet.create({
    title: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontFamily: Fonts.heading
    },
    subTitle: {
        fontSize: 32,
        fontFamily: Fonts.heading,
        textAlign: 'center',
        color: colors.blue
    },
    welcomeMessage: {
        color: colors.gold,
        fontSize: 40,
        textAlign: 'center',
        fontFamily: Fonts.heading
    },
    text: {
        color: colors.with,
        fontFamily: Fonts.text,
        fontSize: 18,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.with,
        color: colors.with,
        textAlign: 'center',
        fontFamily: Fonts.text,
        fontSize: 18,
        width: 220
    }
});