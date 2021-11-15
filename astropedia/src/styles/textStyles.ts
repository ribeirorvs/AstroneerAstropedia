import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';
import Fonts from './fonts'

export const textStyle = StyleSheet.create({
    title: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontFamily: Fonts.heading,
        color: colors.blue,
        marginVertical: 15
    },
    subTitle: {
        fontSize: 32,
        fontFamily: Fonts.heading,
        textAlign: 'center',
        color: colors.blue
    },
    component: {
        fontSize: 40,
        fontFamily: Fonts.heading,
        color: colors.white,
        textTransform: 'uppercase',
        paddingTop: 5
    },
    welcomeMessage: {
        color: colors.gold,
        fontSize: 40,
        textAlign: 'center',
        fontFamily: Fonts.heading
    },
    text: {
        color: colors.white,
        fontFamily: Fonts.text,
        fontSize: 18,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
        color: colors.white,
        textAlign: 'center',
        fontFamily: Fonts.text,
        fontSize: 18,
        width: 220
    }
});