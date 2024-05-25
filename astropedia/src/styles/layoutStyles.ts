import { StyleSheet } from 'react-native';
import colors from './colors';


export const layoutStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    wrapper: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    flatList: {
        width: '110%',
        paddingLeft: '10%'
    },
});