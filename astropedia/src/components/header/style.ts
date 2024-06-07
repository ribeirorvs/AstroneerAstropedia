import colors from '@/styles/colors';
import fonts from '@/styles/fonts';
import { StyleSheet } from 'react-native';

export const headerStyle = StyleSheet.create({
    header: {
        width: '100%',        
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingVertical: 20,
        paddingLeft: '5%',
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
        flexDirection: 'row'
    },
    headerHome: {
        paddingLeft: '35%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    player: {
        marginRight: 20
    },
    text: {
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 18
    },
})