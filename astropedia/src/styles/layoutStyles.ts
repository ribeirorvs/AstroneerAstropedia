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
    header: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
    headerHome: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
});