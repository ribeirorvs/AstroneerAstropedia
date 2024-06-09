import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

export const componentButtonStyle = StyleSheet.create({
    component: {
        borderRadius: 20,
        paddingTop: 5,
        backgroundColor: colors.blue,
        flexDirection: 'row',
        width: '90%',
        height: 70,
        marginVertical: 15,
        alignItems: 'center'
    },
    imgComponent: {
        height: 60,
        width: 60,
        marginHorizontal: 10
    },
    txtComponent: {
        fontSize: 18,
        fontFamily: fonts.subtitle,
        color: colors.white,
        textTransform: 'uppercase',
        maxWidth: "80%",
    },
});