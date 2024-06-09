import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

export const contentTitleStyle = StyleSheet.create({
    contentTitle: {
        height: 47,
        width: '100%',
        marginTop: 12,
        alignItems: 'center',
        backgroundColor: colors.blue,
        justifyContent: 'space-around'
    },
    txtContentTitle: {
        color: colors.white,
        fontFamily: fonts.subtitle,
        fontSize: 18,
        textTransform: 'uppercase'
    },
});