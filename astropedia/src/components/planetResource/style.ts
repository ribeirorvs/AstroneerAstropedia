import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

export const planetResourceStyle = StyleSheet.create({
    resource: {
        flexDirection: 'row',
        marginTop: 12
    },
    resourceDetails: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        paddingLeft: 15,
        height: 70,
        marginTop: 10,
        width: '30%'
    },
    nugget: {
        height: 90,
        width: 90,
        backgroundColor: colors.blue,
        borderWidth: 5,
        borderColor: colors.white,
        borderRadius: 45
    },
    resourceIconImg: {
        height: 70,
        width: 70,
        backgroundColor: colors.blue,
        marginTop: 10
    },
    txtResourceName: {
        color: colors.gold,
        fontFamily: fonts.heading,
        fontSize: 18,
        textTransform: 'uppercase'
    },
    txtResourceDetails: {
        color: colors.black,
        fontFamily: fonts.heading,
        fontSize: 12,
        textTransform: 'uppercase'
    },
    txtResourceDescription: {
        color: colors.black,
        fontFamily: fonts.text,
        fontSize: 12,
    },
});