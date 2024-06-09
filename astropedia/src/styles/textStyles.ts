import { StyleSheet } from 'react-native';
import colors from './colors';
import Fonts from './fonts'

export const textStyle = StyleSheet.create({
    welcomeMessage: {
        color: colors.gold,
        fontSize: 40,
        textAlign: 'center',
        fontFamily: Fonts.title
    },
    text: {
        color: colors.white,
        fontFamily: Fonts.text,
        fontSize: 18
    },
    link: {
        color: colors.blue,
        fontSize: 18,
        fontFamily: Fonts.text
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
        fontFamily: Fonts.text,
        color: colors.black,
        width: '80%'
    },
});