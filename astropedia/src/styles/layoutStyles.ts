import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

export const layoutStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});