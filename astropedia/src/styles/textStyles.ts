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
    link: {
        color: colors.blue,
        fontSize: 18
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
        color: colors.white,
        textAlign: 'center',
        fontFamily: Fonts.text,
        fontSize: 18,
        width: 220
    },
    contactInput: {
        fontSize: 18,
        color: colors.black,
        width: '80%'
    },
});