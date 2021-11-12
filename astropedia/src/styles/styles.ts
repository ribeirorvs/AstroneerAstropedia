import { StyleSheet } from 'react-native';
import colors from './colors';

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
        textTransform: 'uppercase'
    },
    welcomeImage: {
        height: 305,
        width: 305,
        marginTop: 40
    },
    welcomeMessage: {
        color: colors.gold,
        fontSize: 40,
        textAlign: 'center'
    },
    text: {
        color: colors.with
    },
    button: {
        height: 88,
        width: 108,
        justifyContent: 'center'
    }
});