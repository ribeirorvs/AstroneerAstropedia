import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';
import Fonts from './fonts'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    title: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontFamily: Fonts.heading
    },
    welcomeImage: {
        height: Dimensions.get('window').width * 0.7,
        marginTop: 40
    },
    welcomeMessage: {
        color: colors.gold,
        fontSize: 40,
        textAlign: 'center',
        fontFamily: Fonts.heading
    },
    text: {
        color: colors.with,
        fontFamily: Fonts.text
    },
    button: {
        height: 88,
        width: 108,
        justifyContent: 'center'
    }
});