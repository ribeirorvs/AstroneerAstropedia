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
        marginVertical: 15
    },
    imgComponent: {
        height: 60,
        width: 60,
        marginHorizontal: 10
    },
    txtComponent: {
        fontSize: 40,
        fontFamily: fonts.heading,
        color: colors.white,
        textTransform: 'uppercase',
        paddingTop: 5,
        maxWidth: "76%"
    },
});